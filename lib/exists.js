/**
 *  lib/exists.js
 *
 *  David Janes
 *  IOTDB
 *  2021-04-21
 *      
 *  Copyright (2013-2021) David P. Janes
 *      
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *      
 *     http://www.apache.org/licenses/LICENSE-2.0 
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict"

const _ = require("iotdb-helpers")
const izip = require("iotdb-zip")

/**
 */
const exists = _.promise((self, done) => {
    _.promise(self)
        .validate(exists)
        .then(izip.exists)
        .end(done, self, exists)
})

exists.method = "exists"
exists.requires = {
    zip: _.is.Object,
    path: _.is.String,
}
exists.produces = {
    exists: _.is.Boolean,
}
exists.params = {
    exists: _.p.normal,
}
exists.p = _.p(exists)

/**
 *  API
 */
exports.exists = exists
