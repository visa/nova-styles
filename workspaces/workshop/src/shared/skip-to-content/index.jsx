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
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SkipToContent() {
  const ref = React.useRef(null);
  const { pathname } = useLocation();

  React.useEffect(() => {
    ref.current?.focus();
  }, [pathname]);

  const handleSkip = () => {
    const contentArea = document.querySelector('.w-area');
    contentArea.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <span ref={ref} tabIndex={-1}></span>
    <a href="#content" className="v-link v-skip-link" onClick={handleSkip}>
      skip to content
    </a>
    </>
  );
}
