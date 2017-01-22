#!/bin/sh
if [ "$MODE" != "localhost" ] ; then
  $[manageExtraConfig] export URL=$[run.url] && node scripts/manage.js
else
  $[manageExtraConfig] node scripts/manage.js
fi
