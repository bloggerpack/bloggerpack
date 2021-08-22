// Notes
//
// You can omit the `.js` extension:
//
//         import './filename';
//
// It also support glob imports:
//
//         import './dir/**/*.js';
//
// Import from node modules:
//
//         import 'package-name';
//         import 'package-name/dir/filename';
//         import { square } from 'package-name/lib/math';
//
//         !!! Glob import is not supported for node modules.
//         import 'package-name/dir/**/*.js';

import './jquery-global';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap';
import './data-bs';

// JS-in-Template (always last)
import './js-in-template/**/*.js';
