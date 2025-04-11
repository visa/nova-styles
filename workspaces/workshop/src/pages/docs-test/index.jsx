/**
 *              © 2025 Visa
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
import React, { useEffect } from 'react'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { paramCase } from 'change-case';

/* Data Sources */
// import { metadata as docs } from '../../data/docs';
import docs from '../../data/docs/metadata';

/* Styles */
import './styles.css'; 
import '../../shared/code-view/styles.css'; 

const PUBLIC_URL = import.meta.env.BASE_URL;

const DocsTestPage = () => {
  useEffect(() => {
    console.log(PUBLIC_URL); 
    console.log(docs.entries.components.button); 
    document.documentElement.style.setProperty(
      'overflow',
      'auto'
    );
    document.documentElement.style.setProperty(
      'margin',
      'var(--size-responsive-20)'
    );
  }, []); 

  return (
    <>
      <h1 className="v-typography-headline-1">Docs Test</h1>
      {docs.entries.components.button.map((x,i) => (
        <React.Fragment key={i}>
          <br />
          <br />
          <br />
          <br />
          <h2 className="v-typography-headline-2">{x.name}</h2>
          <p>{x.description}</p>
          <br />
          {x.example 
            ? <iframe 
              src={`${PUBLIC_URL}/${x.example.substring(0, x.example.lastIndexOf('/'))}/${paramCase(x.example.substring(x.example.lastIndexOf('/') + 1))}`} 
              title={`${x.name} live example`} 
              loading="lazy"
              width="100%" 
              scrolling="no"
              style={{
                overflow: 'hidden'
              }}
            />
            : null 
          }
          {x.markup
            ? <div className="w-code-mirror">
              <div className="w-code-tools">
                <CopyToClipboard text={x.markup}>
                  <button className="v-button v-button-small v-button-alternate">Copy code</button>
                </CopyToClipboard>
              </div>
              <div className="w-code-sample" height="120px">
                {x.markup}
              </div>
            </div>
            : null 
          }
        </React.Fragment>
      ))
      }
    </>
  )
}; 

export default DocsTestPage; 