/**
 *  lib/list.js
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
const list = _.promise((self, done) => {
    _.promise(self)
        .validate(list)
        .then(izip.list)
        .end(done, self, list)
})

list.method = "list"
list.requires = {
    zip: _.is.Object,
}
list.produces = {
    paths: _.is.Array.of.String,
}

/**
 *  API
 */
exports.list = list
