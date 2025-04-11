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
import React from 'react'; 
import { Link as RLink } from 'react-router-dom'; 


const PUBLIC_URL = import.meta.env.BASE_URL && import.meta.env.BASE_URL !== "undefined"
  ? import.meta.env.BASE_URL
  : '';

const Link = ({ route, newWindow, children, ...props }) => {
  const isExternalLink = route && route.indexOf('http') === 0;

  const href = isExternalLink
    ? route
    : `${PUBLIC_URL || ''}/${route || ''}`;

  return newWindow ? (
    <a href={href} target="_blank" rel="noreferrer noopener" className="v-link" {...props}>
      {children}
    </a>
  ) : isExternalLink ? (
    <a href={href} className="v-link" {...props}>
      {children}
    </a>
  ) : (
    <RLink to={href} className="v-link" {...props}>
      {children}
    </RLink>
  );
};

export default Link;
