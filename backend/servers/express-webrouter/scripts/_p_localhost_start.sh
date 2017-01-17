#!/bin/sh
if [ "$VIRTUAL_ENV" != "" ] ; then
  VIRTUAL_ENV_OPTION = -H $VIRTUAL_ENV
else
  VIRTUAL_ENV_OPTION = ""
fi
if [ "$MODE" != "localhost" ] ; then
  $[manageExtraConfig] export URL=$[run.url] && node scripts/manage.js
else
  $[manageExtraConfig] node scripts/manage.js
fi
