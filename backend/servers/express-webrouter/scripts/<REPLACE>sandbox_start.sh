#!/bin/sh
_TYPE=$TYPE && $[manageExtraConfig] export URL=$[run.url] && export TYPE=$_TYPE && npm run sandbox
