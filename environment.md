## Environment Record

These will be the environment secrets and variables that will be used by the application. The variables prefixed by `CUSTOM` are optional.

For the finer details, default configurations can be found at [/src/conf/config.ts](/src/conf/config.ts).

```yaml
env:
    GH_TOKEN: ${{ secrets.GH_TOKEN }}
    CLIENT_ID: ${{ secrets.CLIENT_ID }}
    CLIENT_SECRET: ${{ secrets.CLIENT_SECRET }}
    CLIENT_CODE: ${{ secrets.CLIENT_CODE }}
    CLIENT_REDIRECT_URI: ${{ secrets.CLIENT_REDIRECT_URI }}

    GH_GIST_ID: ${{ vars.GH_GIST_ID }}
    CUSTOM_TITLE: ${{ vars.CUSTOM_TITLE }}
    CUSTOM_DESCRIPTION: ${{ vars.CUSTOM_DESCRIPTION }}
```