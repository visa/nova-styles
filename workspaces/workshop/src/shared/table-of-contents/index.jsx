/**
 *              Copyright (c) 2025 Visa, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 **/
import React, { useCallback, useEffect, useState } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom'; 
import { paramCase, noCase } from 'change-case'; 

import './styles.css'; 

const List = ({ items, selected, onSelect, ...props}) => {
  return (
    <ul>
      { items.map((x, i) => (
        <li key={i}>
          <a href={`#${paramCase(x.name)}`} onClick={() => onSelect(x)} aria-current={selected && selected.name ? noCase(x.name) === noCase(selected.name) : false} className="v-link">
            {x.name}
          </a>
          {x.children && x.children.length > 0
            ? <List items={x.children} selected={selected} onSelect={onSelect}></List>
            : null 
          }
        </li>
      ))}
    </ul>
  )
}; 

const TableOfContents = ({ outline, headerRef, contentRef = { current: window }, ...props}) => {
  const { hash } = useLocation(); 
  const navigate = useNavigate(); 
  const [selected, setSelected] = useState({}); 

  const selectContent = useCallback((x) => {
    if (!x || !x.ref || !x.ref.current) {
      return; 
    }

    setSelected(x); 
    const targetTop = x.ref.current.offsetTop; 
    const headerHeight = headerRef.current.getBoundingClientRect().height; 

    contentRef.current.scrollTo(0, targetTop - headerHeight);
  }, [contentRef, headerRef]); 

  const findInOutline = useCallback((name) => {
    const found = outline.map(x => noCase(x.name) === noCase(name)
      ? x 
      : x.children && x.children.length > 0 
        ? x.children.map(y => noCase(y.name) === noCase(name) ? y : null) 
        : null
    ).flat().filter(x => x !== null); 

    return found.length > 0 ? found[0] : null; 
  }, [outline]); 

  // detect section highlighted on scroll in relation to table of content items
  const detectContent = useCallback(() => {
    const observer = new IntersectionObserver (
      (entries) => {
        const firstIntersecting = entries 
          .filter((entry) => entry.intersectionRatio > 0) 
          .slice(0, 1)[0]; 

        if (!firstIntersecting) return; 
        const id = firstIntersecting.target.id; 
        setSelected(findInOutline(id)); 
      },
      { rootMargin: `0% 0% -80% 0%` }
    ); 

    outline.forEach(x => {
      if (!x || !x.ref || !x.ref.current) {
        return 
      }

      observer.observe(x.ref.current); 
      if (!x.children) return; 
      x.children.forEach(y => {
        observer.observe(y.ref.current); 
      }); 
    }); 

    return () => {
      outline.forEach(x => {
        if (!x.ref || !x.ref.current) return; 
        observer.unobserve(x.ref.current); 
        if (!x.children) return; 
        x.children.forEach(y => {
          observer.unobserve(y.ref.current); 
        }); 
      }); 
    }; 
  }, [outline, findInOutline]); 

  useEffect(() => {
    setTimeout(() => {
      window?.scrollTo(0, 0);

      const name = noCase(hash.replace('#', '')); 
      const found = outline.map(x => noCase(x.name) === noCase(name)
        ? x 
        : x.children && x.children.length > 0 
          ? x.children.map(y => noCase(y.name) === noCase(name) ? y : null)
          : null 
      ).flat().filter(x => x !== null); 

      selectContent(found.length > 0 ? found[0] : null); 
    }, 1); 
  }, [hash, outline, selectContent]); 

  useEffect(() => {
    if (!outline) {
      return; 
    }

    return detectContent(); 
  }, [outline, detectContent]); 
  
  return (
    <aside className="v-anchor-link-menu" aria-labelledby="table-of-contents-header">
      <section className="w-toc">
        <header className="v-anchor-link-menu-header">
          <h2 id="table-of-contents-header" className="v-typography-overline">On This Page</h2>
        </header>
        <List items={outline} selected={selected} onSelect={(x) => { navigate(`#${paramCase(x.name)}`); }} />
      </section>
    </aside>
  )
}; 

export default TableOfContents; 