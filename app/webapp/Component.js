sap.ui.define(
   ['sap/fe/core/AppComponent'],
   ac => ac.extend('bookshop.Component',{
       metadata: {
        interfaces: [
            "sap.ui.core.IAsyncContentCreation",
          ],        
           manifest: 'json'
       }
   })
)