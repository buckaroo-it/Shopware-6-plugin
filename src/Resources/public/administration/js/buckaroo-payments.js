(this.webpackJsonp=this.webpackJsonp||[]).push([["buckaroo-payments"],{"/bCR":function(t,e,a){},"1ofz":function(t,e,a){var n=a("BuoK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("SZ7m").default)("13181e9b",n,!0,{})},"2rbZ":function(t){t.exports=JSON.parse('{"buckaroo-payment":{"fee":"Buckaroo Fee","order":{"refundDescription":"Refund for order #orderNumber"},"general":{"title":"Buckaroo","description":"Buckaroo Payment"},"settingsForm":{"save":"Save","titleSuccess":"Success","titleError":"Error"},"supportModal":{"menuButton":"Version & Support","title":"Version & Support","support":{"description":"Before contacting Buckaroo technical support, please retrieve your (Merchant) key, Secret key, certificate and certificate thumbprint.","label1":"Buckaroo Payment Plaza:","label2":"Phone:","label3":"E-mail:","label4":"Website:","your_version":"Your PHP version:","version":"Version compatibility","information":"Information"}},"tabs":{"title":"Buckaroo Payment","overview":"Overview"},"paymentDetail":{"refundTitle":"Refund","transactionsTitle":"Transactions","amountTitle":"Amount","amountTotalTitle":"Grand total","amountRefundTotalTitle":"Refund Grand total","buttonTitle":"Refund","successTitle":"Success","successMessage":"Buckaroo success refunded ","errorTitle":"Error","payTitle":"Receive payment","payDescription":"Receive payment for order","payButton":"Receive payment"},"orderItems":{"title":"Items to Refund","types":{"id":"id","name":"Title","quantity":"Qty to Refund","totalAmount":"Subtotal"}},"transactionsToRefund":{"title":"Refund Totals"},"transactionHistory":{"types":{"id":"id","created_at":"Date/time","total":"Total","shipping_costs":"Shipping costs","total_excluding_vat":"Total excluding VAT","total_including_vat":"Total including VAT","vat":"VAT","transaction_key":"Transaction key","transaction_method":"Payment method","statuscode":"Status"}},"messageNotValid":"This field not valid.","messageNotBlank":"This field must not be empty."}}')},"6P9O":function(t){t.exports=JSON.parse('{"buckaroo-payment":{"fee":"Buckaroo Vergoeding","order":{"refundDescription":"Terugbetaling voor bestelling #orderNumber"},"general":{"title":"Buckaroo","description":"Buckaroo Payment"},"settingsForm":{"save":"Opslaan","titleSuccess":"Succes","titleError":"Fout"},"supportModal":{"menuButton":"Ondersteuning van de versie","title":"Ondersteuning van de versie","support":{"description":"Voordat u contact opneemt met Buckaroo technische ondersteuning, kunt u uw (Merchant) sleutel, geheime sleutel, certificaat en certificaat duimafdruk ophalen.","label1":"Buckaroo Payment Plaza:","label2":"Telefoon:","label3":"E-mail:","label4":"Website:","your_version":"Uw PHP versie:","version":"Verenigbaarheid van versie","information":"Informatie"}},"tabs":{"title":"Buckaroo Payment","overview":"Overzicht"},"paymentDetail":{"refundTitle":"Refund","transactionsTitle":"Transacties","amountTitle":"Bedrag","amountTotalTitle":"Algemeen totaal","amountRefundTotalTitle":"Eindtotaal totaal","buttonTitle":"Restitutie","successTitle":"Succes","successMessage":"Buckaroo-succes terugbetaald ","errorTitle":"Fout","payTitle":"Betaling ontvangen","payDescription":"Ontvang betaling voor bestelling","payButton":"Betaling ontvangen"},"orderItems":{"title":"Te restitueren items","types":{"id":"id","name":"Titel","quantity":"Aantal terugbetalen","totalAmount":"Subtotaal"}},"transactionsToRefund":{"title":"Totalen terugbetalen"},"transactionHistory":{"types":{"id":"id","created_at":"Datum / tijd","total":"Total","shipping_costs":"Verzendkosten","total_excluding_vat":"Totaal exclusief VAT","total_including_vat":"Totaal inclusief VAT","vat":"VAT","transaction_key":"Transactiesleutel","transaction_method":"Betaalmethode","statuscode":"Toestand"}},"messageNotValid":"Dit veld is niet geldig.","messageNotBlank":"Dit veld mag niet leeg zijn."}}')},AGZG:function(t,e){t.exports='{% block sw_settings_content_card_slot_plugins %}\n    {% parent %}\n\n    <sw-settings-item :label="$tc(\'buckaroo-payment.general.title\')"\n                      :to="{ name: \'buckaroo.payment.index\' }"\n                      :backgroundEnabled="false">\n        <template #icon>\n            <img class="sw-settings-index__buckaroo-icon" :src="\'buckaroopayments/plugin.png\' | asset">\n        </template>\n    </sw-settings-item>\n{% endblock %}\n'},BuoK:function(t,e,a){},DcHO:function(t,e){const{Application:a}=Shopware,n=Shopware.Classes.ApiService;class o extends n{constructor(t,e,a="buckaroo"){super(t,e,a)}getSupportVersion(){const t=`_action/${this.getApiBasePath()}/version`;return this.httpClient.post(t,{},{headers:this.getBasicHeaders()}).then(t=>n.handleResponse(t))}}a.addServiceProvider("BuckarooPaymentSettingsService",t=>{const e=a.getContainer("init");return new o(e.httpClient,t.loginService)})},HSwR:function(t,e){t.exports="{% block sw_plugin_list_grid_columns_actions_settings %}\n    <template v-if=\"item.composerName === 'buckaroo/shopware6'\">\n        <sw-context-menu-item :routerLink=\"{ name: 'buckaroo.payment.index' }\">\n            {{ $tc('sw-plugin.list.config') }}\n        </sw-context-menu-item>\n    </template>\n\n    <template v-else>\n        {% parent %}\n    </template>\n{% endblock %}\n"},LHRe:function(t,e){t.exports="{% block sw_order_detail_base_secondary_info_payment %}\n    <template v-if=\"currentOrder.transactions.length > 0 && (!currentOrder.transactions.last().paymentMethod.translated.customFields || !currentOrder.transactions.last().paymentMethod.translated.customFields.is_buckaroo)\">\n        {% parent %}\n    </template>\n    <template v-if=\"currentOrder.transactions.length > 0 && currentOrder.transactions.last().paymentMethod.translated.customFields && currentOrder.transactions.last().paymentMethod.translated.customFields.is_buckaroo\">\n        <dt>{{ $tc('sw-order.detailBase.labelPaymentMethod') }}</dt>\n        <dd>\n            <template v-if=\"config['BuckarooPayments.config.' + currentOrder.transactions.last().paymentMethod.translated.customFields.buckaroo_key + 'Label']\">\n                {{ config['BuckarooPayments.config.' + currentOrder.transactions.last().paymentMethod.translated.customFields.buckaroo_key + 'Label'] }}\n            </template>\n        </dd>\n    </template>\n{% endblock %}\n\n"},NzlU:function(t,e){const{Application:a}=Shopware,n=Shopware.Classes.ApiService;class o extends n{constructor(t,e,a="buckaroo"){super(t,e,a)}getBuckarooTransaction(t){const e=`_action/${this.getApiBasePath()}/getBuckarooTransaction`;return this.httpClient.post(e,{transaction:t},{headers:this.getBasicHeaders()}).then(t=>n.handleResponse(t))}refundPayment(t,e,a){const o=`_action/${this.getApiBasePath()}/refund`;return this.httpClient.post(o,{transaction:t,transactionsToRefund:e,orderItems:a},{headers:this.getBasicHeaders()}).then(t=>n.handleResponse(t))}captureOrder(t,e,a){const o=`_action/${this.getApiBasePath()}/capture`;return this.httpClient.post(o,{transaction:t},{headers:this.getBasicHeaders()}).then(t=>n.handleResponse(t))}}a.addServiceProvider("BuckarooPaymentService",t=>{const e=a.getContainer("init");return new o(e.httpClient,t.loginService)})},QZFj:function(t,e){t.exports='{% block buckaroo_payment_detail %}\n    <div class="buckaroo-payment-detail">\n        \n         <sw-card :title="$tc(\'buckaroo-payment.paymentDetail.refundTitle\')">\n            \n            {{ $tc(\'buckaroo-payment.orderItems.title\') }}\n            <sw-data-grid :dataSource="orderItems"\n                :columns="orderItemsColumns"\n                :showActions="false"\n                :showSelection="false">\n\n                    <template #column-quantity="{ item }">\n                        <input type="number" min="0" :max="item.quantityMax" v-model="item.quantity" @input="recalculateOrderItems" onkeydown="return event.keyCode !== 69">\n                    </template>\n\n            </sw-data-grid>\n\n            <sw-container columns="1fr 440px" class="sw-order-detail__summary">\n                <sw-description-list grid="265px 1fr" class="sw-order-detail__summary-data">\n                        <dt>{{ $tc(\'buckaroo-payment.paymentDetail.amountTotalTitle\') }}: </dt>\n                        <dd>{{ buckaroo_refund_amount }}  {{ currency }}</dd>\n                </sw-description-list>\n            </sw-container>\n                 \n            <sw-card-section divider="top" secondary slim>\n                <sw-container columns="1fr 440px"\n                              class="sw-order-detail__summary">\n                    <sw-description-list grid="265px 1fr" class="sw-order-detail__summary-data">\n                            <dd></dd>\n                            <dt>{{ $tc(\'buckaroo-payment.transactionsToRefund.title\') }}</dt>\n                    </sw-description-list>\n                </sw-container>\n\n                <sw-data-grid :dataSource="transactionsToRefund"\n                    :columns="transactionsToRefundColumns"\n                    :showHeader="false"\n                    :showActions="false"\n                    :showSelection="false">\n\n                        <template #column-transaction_method="{ item }">\n                            <img :src="\'buckaroopayments/storefront/buckaroo/logo/\'+item.transaction_method + \'.png\' | asset" class="transaction-method-logo" width=20  :title="item.transaction_method">\n                                {{ item.transaction_method }}\n                        </template>\n\n                        <template #column-amount="{ item }">\n                            <input type="number" min="0" :max="item.amountMax" v-model="item.amount"  @input="recalculateRefundItems" onkeydown="return event.keyCode !== 69">\n                        </template>\n\n                </sw-data-grid>\n\n                <sw-container columns="1fr 440px" class="sw-order-detail__summary">\n                    <sw-description-list grid="265px 1fr" class="sw-order-detail__summary-data">\n                            <dt>{{ $tc(\'buckaroo-payment.paymentDetail.amountRefundTotalTitle\') }}: </dt>\n                            <dd>{{ buckaroo_refund_total_amount }}  {{ currency }}</dd>\n                    </sw-description-list>\n                </sw-container>\n                 \n            </sw-card-section>\n\n            <sw-container columns="1fr 440px" class="sw-order-detail__summary">\n                <sw-description-list grid="265px 1fr" class="sw-order-detail__summary-data"><dt></dt><dd>\n                    <sw-button @click="refundOrder(orderId, buckaroo_refund_amount)" :disabled="!isRefundPossible">\n                    {{ $tc(\'buckaroo-payment.paymentDetail.buttonTitle\') }}\n                    </sw-button></dd>\n                </sw-description-list>\n            </sw-container>\n\n         </sw-card>\n\n        <sw-card :title="$tc(\'buckaroo-payment.paymentDetail.payTitle\')">\n\n            {{ $tc(\'buckaroo-payment.paymentDetail.payDescription\') }}\n\n            <sw-container columns="1fr 440px" class="sw-order-detail__summary">\n                <sw-description-list grid="265px 1fr" class="sw-order-detail__summary-data"><dt></dt><dd>\n                        <sw-button @click="captureOrder(orderId)" :disabled="!isCapturePossible">\n                            {{ $tc(\'buckaroo-payment.paymentDetail.payButton\') }}\n                        </sw-button></dd>\n                </sw-description-list>\n            </sw-container>\n\n        </sw-card>\n\n         <sw-card :title="$tc(\'buckaroo-payment.paymentDetail.transactionsTitle\')">\n            <sw-data-grid :dataSource="relatedResources"\n                :columns="relatedResourceColumns"\n                :showActions="false"\n                :showSelection="false">\n\n                    <template #column-transaction_method="{ item }">\n                        <img :src="\'buckaroopayments/storefront/buckaroo/logo/\'+item.transaction_method + \'.png\' | asset" class="transaction-method-logo" width=20  :title="item.transaction_method">\n                            {{ item.transaction_method }}\n                    </template>\n\n            </sw-data-grid>\n         </sw-card>\n\n\n        <sw-loader v-if="isLoading">\n        </sw-loader>\n    </div>\n{% endblock %}'},VVeZ:function(t,e,a){"use strict";a.r(e);var n=a("akA1"),o=a.n(n);a("fRLX");const{Component:s,Mixin:r}=Shopware;s.register("buckaroo-settings",{template:o.a,mixins:[r.getByName("notification"),r.getByName("sw-inline-snippet")],inject:["BuckarooPaymentSettingsService"],data:()=>({isLoading:!1,isSaveSuccessful:!1,config:{},websiteKeyIdFilled:!1,secretKeyIdFilled:!1,showValidationErrors:!1,phpversion:!1,isSupportModalOpen:!1,isPhpVersionSupport:!1,collapsibleState:{websiteKey:!0,secretKey:!0,guid:!0,creditcardEnabled:!0,creditcardsEnabled:!0,idealEnabled:!0,idealprocessingEnabled:!0,bancontactmrcashEnabled:!0,afterpayEnabled:!0,sofortueberweisungEnabled:!0,paypalEnabled:!0,transferEnabled:!0,giropayEnabled:!0,KBCPaymentButtonEnabled:!0,sepadirectdebitEnabled:!0,payconiqEnabled:!0,applepayEnabled:!0,giftcardsEnabled:!0,RequestToPayEnabled:!0,capayableEnabled:!0,epsEnabled:!0,Przelewy24Enabled:!0,AlipayEnabled:!0,WeChatPayEnabled:!0,TrustlyEnabled:!0,klarnakpEnabled:!0,advancedConfiguration:!0},collapsibleAdvancedState:{stockReserve:!0,sendInvoiceEmail:!0,pendingPaymentStatus:!0,paymentSuccesStatus:!0,paymentFailedStatus:!0,orderStatus:!0}}),created(){var t=this;this.createdComponent(),this.BuckarooPaymentSettingsService.getSupportVersion().then(e=>{t.phpversion=e.phpversion,t.isPhpVersionSupport=e.isPhpVersionSupport})},computed:{credentialsMissing:function(){return!this.websiteKeyIdFilled||!this.secretKeyIdFilled}},metaInfo(){return{title:this.$createTitle()}},methods:{createdComponent(){},saveFinish(){this.isSaveSuccessful=!1},onConfigChange(t){this.config=t,this.checkCredentialsFilled(),this.showValidationErrors=!1},checkCredentialsFilled(){this.websiteKeyIdFilled=!!this.getConfigValue("websiteKey"),this.secretKeyIdFilled=!!this.getConfigValue("secretKey")},validateWebsiteKey(){return!(this.getConfigValue("websiteKey").length<10||this.getConfigValue("websiteKey").length>10)},validateSecretKey(){return!(this.getConfigValue("secretKey").length<5||this.getConfigValue("secretKey").length>50)},getConfigValue(t){const e=this.$refs.systemConfig.actualConfigData.null;return null===this.$refs.systemConfig.currentSalesChannelId?this.config[`BuckarooPayments.config.${t}`]:this.config[`BuckarooPayments.config.${t}`]||e[`BuckarooPayments.config.${t}`]},getPaymentConfigValue(t,e){let a=t.charAt(0).toUpperCase()+t.slice(1);return this.getConfigValue(e+a)||this.getConfigValue(t)},onSave(){this.credentialsMissing?this.showValidationErrors=!0:this.validateWebsiteKey()&&this.validateSecretKey()?(this.isSaveSuccessful=!1,this.isLoading=!0,this.$refs.systemConfig.saveAll().then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0}).catch(()=>{this.isLoading=!1})):this.showValidationErrors=!0},displayField(t,e){let a=t.name.replace("BuckarooPayments.config.","");if(a in this.collapsibleState)return!0;if(a in this.collapsibleAdvancedState&&null!=e["BuckarooPayments.config.advancedConfiguration"]&&e["BuckarooPayments.config.advancedConfiguration"])return!0;let n=a;return a=a.split(/([A-Z][a-z]+)/).filter((function(t){return t})),a.pop(),a=a.join(""),!(null==e["BuckarooPayments.config."+a+"Enabled"]||!e["BuckarooPayments.config."+a+"Enabled"])||(!("allowedcreditcard"!=n||null==e["BuckarooPayments.config.creditcardEnabled"]||!e["BuckarooPayments.config.creditcardEnabled"])||(!("allowedcreditcards"!=n||null==e["BuckarooPayments.config.creditcardsEnabled"]||!e["BuckarooPayments.config.creditcardsEnabled"])||(!("allowedgiftcards"!=n||null==e["BuckarooPayments.config.giftcardsEnabled"]||!e["BuckarooPayments.config.giftcardsEnabled"])||!("applepayShowProduct"!=n&&"applepayShowCart"!=n||null==e["BuckarooPayments.config.applepayEnabled"]||!e["BuckarooPayments.config.applepayEnabled"]))))},getBind(t,e){return e!==this.config&&this.onConfigChange(e),this.showValidationErrors&&("BuckarooPayments.config.websiteKey"!==t.name||this.websiteKeyIdFilled||(t.config.error={code:1,detail:this.$tc("buckaroo-payment.messageNotBlank")}),"BuckarooPayments.config.secretKey"!==t.name||this.secretKeyIdFilled||(t.config.error={code:1,detail:this.$tc("buckaroo-payment.messageNotBlank")}),"BuckarooPayments.config.websiteKey"!==t.name||this.validateWebsiteKey()||(t.config.error={code:1,detail:this.$tc("buckaroo-payment.messageNotValid")}),"BuckarooPayments.config.secretKey"!==t.name||this.validateSecretKey()||(t.config.error={code:1,detail:this.$tc("buckaroo-payment.messageNotValid")})),t}}});var i=a("gyNi"),c=a.n(i);const{Component:l,Context:d}=Shopware,u=Shopware.Data.Criteria;l.override("sw-order-detail",{template:c.a,data:()=>({isBuckarooPayment:!1}),computed:{isEditable(){return!this.isBuckarooPayment||"buckaroo.payment.detail"!==this.$route.name},showTabs:()=>!0},watch:{orderId:{deep:!0,handler(){if(!this.orderId)return void this.setIsBuckarooPayment(null);const t=this.repositoryFactory.create("order"),e=new u(1,1);e.addAssociation("transactions"),t.get(this.orderId,d.api,e).then(t=>{if(t.transactions.length<=0||!t.transactions[0].paymentMethodId)return void this.setIsBuckarooPayment(null);const e=t.transactions[0].paymentMethodId;null!=e&&this.setIsBuckarooPayment(e)})},immediate:!0}},methods:{setIsBuckarooPayment(t){if(!t)return;this.repositoryFactory.create("payment_method").get(t,d.api).then(t=>{this.isBuckarooPayment=t.formattedHandlerIdentifier.indexOf("buckaroo")>=0})}}});var p=a("HSwR"),m=a.n(p);const{Component:h}=Shopware;h.override("sw-plugin-list",{template:m.a});var y=a("AGZG"),b=a.n(y);a("iWHm");const{Component:g}=Shopware;g.override("sw-settings-index",{template:b.a});var f=a("WO28"),k=a.n(f);const{Component:w,Context:v}=Shopware;Shopware.Data.Criteria;w.override("sw-order-detail-base",{template:k.a});var _=a("LHRe"),S=a.n(_);const{Component:B}=Shopware;B.override("sw-order-user-card",{template:S.a,inject:["systemConfigApiService"],data:()=>({config:{}}),created(){this.systemConfigApiService.getValues("BuckarooPayments.config",null).then(t=>{this.config=t}).finally(()=>{})}});var P=a("QZFj"),T=a.n(P);a("1ofz");const{Component:C,Mixin:F,Filter:x,Context:E}=Shopware,R=Shopware.Data.Criteria;C.register("buckaroo-payment-detail",{template:T.a,inject:["repositoryFactory","BuckarooPaymentService"],mixins:[F.getByName("notification")],data:()=>({buckaroo_refund_amount:"0",buckaroo_refund_total_amount:"0",currency:"EUR",isRefundPossible:!0,isCapturePossible:!1,isLoading:!1,order:!1,buckarooFee:!1,buckarooTransactions:null,orderItems:[],transactionsToRefund:[],relatedResources:[]}),computed:{orderItemsColumns(){return[{property:"name",label:this.$tc("buckaroo-payment.orderItems.types.name"),rawData:!0},{property:"quantity",label:this.$tc("buckaroo-payment.orderItems.types.quantity"),rawData:!0},{property:"totalAmount",label:this.$tc("buckaroo-payment.orderItems.types.totalAmount"),rawData:!0}]},transactionsToRefundColumns:()=>[{property:"transaction_method",rawData:!0},{property:"amount",rawData:!0}],relatedResourceColumns(){return[{property:"created_at",label:this.$tc("buckaroo-payment.transactionHistory.types.created_at"),rawData:!0},{property:"total",label:this.$tc("buckaroo-payment.transactionHistory.types.total"),rawData:!0},{property:"shipping_costs",label:this.$tc("buckaroo-payment.transactionHistory.types.shipping_costs"),rawData:!0},{property:"total_excluding_vat",label:this.$tc("buckaroo-payment.transactionHistory.types.total_excluding_vat"),rawData:!0},{property:"vat",label:this.$tc("buckaroo-payment.transactionHistory.types.vat"),rawData:!0},{property:"transaction_key",label:this.$tc("buckaroo-payment.transactionHistory.types.transaction_key"),rawData:!0},{property:"transaction_method",label:this.$tc("buckaroo-payment.transactionHistory.types.transaction_method"),rawData:!0},{property:"statuscode",label:this.$tc("buckaroo-payment.transactionHistory.types.statuscode"),rawData:!0}]}},created(){this.createdComponent()},methods:{recalculateOrderItems(){this.buckaroo_refund_amount=0;for(const t in this.orderItems)this.orderItems[t].totalAmount=parseFloat(parseFloat(this.orderItems[t].unitPrice)*parseFloat(this.orderItems[t].quantity||0)).toFixed(2),this.buckaroo_refund_amount=parseFloat(parseFloat(this.buckaroo_refund_amount)+parseFloat(this.orderItems[t].totalAmount)).toFixed(2)},recalculateRefundItems(){this.buckaroo_refund_total_amount=0;for(const t in this.transactionsToRefund)this.transactionsToRefund[t].amount&&(this.buckaroo_refund_total_amount=parseFloat(parseFloat(this.buckaroo_refund_total_amount)+parseFloat(this.transactionsToRefund[t].amount)).toFixed(2))},createdComponent(){let t=this;const e=this.$route.params.id,a=this.repositoryFactory.create("order"),n=new R(1,1);this.orderId=e,n.addAssociation("transactions"),a.get(e,E.api,n).then(e=>{null!=e.customFields&&null!=e.customFields.buckarooFee&&(this.buckarooFee=e.customFields.buckarooFee),t.isCapturePossible=e.transactions&&e.transactions.last().customFields&&e.transactions.last().customFields.brqPaymentMethod&&"klarnakp"==e.transactions.last().customFields.brqPaymentMethod.toLowerCase()}),this.BuckarooPaymentService.getBuckarooTransaction(e).then(e=>{e.orderItems.forEach(e=>{t.orderItems.push({id:e.id,name:e.name,quantity:e.quantity,quantityMax:e.quantity,unitPrice:e.unitPrice.value,totalAmount:e.totalAmount.value})}),t.recalculateOrderItems(),e.transactionsToRefund.forEach(e=>{t.transactionsToRefund.push({id:e.id,transactions:e.transactions,amount:e.total,amountMax:e.total,currency:e.currency,transaction_method:e.transaction_method,logo:e.transaction_method?e.logo:null}),t.currency=e.currency}),t.recalculateRefundItems(),e.transactions.forEach(e=>{t.relatedResources.push({id:e.id,transaction_key:e.transaction,total:e.total,total_excluding_vat:e.total_excluding_vat,shipping_costs:e.shipping_costs,vat:e.vat,transaction_method:e.transaction_method,logo:e.transaction_method?e.logo:null,created_at:e.created_at,statuscode:e.statuscode})})}).catch(t=>{console.log("errorResponse",t)})},refundOrder(t,e){let a=this;a.isRefundPossible=!1,this.BuckarooPaymentService.refundPayment(t,this.transactionsToRefund,this.orderItems).then(t=>{for(const e in t)t[e].status?this.createNotificationSuccess({title:a.$tc("buckaroo-payment.settingsForm.titleSuccess"),message:t[e].message}):this.createNotificationError({title:a.$tc("buckaroo-payment.settingsForm.titleError"),message:t[e].message});a.isRefundPossible=!0}).catch(t=>{this.createNotificationError({title:this.$tc("buckaroo-payment.settingsForm.titleError"),message:t.response.data.message}),a.isRefundPossible=!0})},captureOrder(t){let e=this;e.isCapturePossible=!1,this.BuckarooPaymentService.captureOrder(t,this.transactionsToRefund,this.orderItems).then(t=>{t.status?this.createNotificationSuccess({title:e.$tc("buckaroo-payment.settingsForm.titleSuccess"),message:t.message}):this.createNotificationError({title:e.$tc("buckaroo-payment.settingsForm.titleError"),message:t.message}),e.isCapturePossible=!0}).catch(t=>{this.createNotificationError({title:this.$tc("buckaroo-payment.settingsForm.titleError"),message:t.response.data.message}),e.isCapturePossible=!0})}}});var $=a("6P9O"),M=a("nww/"),I=a("2rbZ");const{Module:V}=Shopware;V.register("buckaroo-payment",{type:"plugin",name:"BuckarooPayment",title:"buckaroo.general.title",description:"buckaroo.general.description",version:"1.0.0",targetVersion:"1.0.0",color:"#000000",icon:"default-action-settings",snippets:{"nl-NL":$,"de-DE":M,"en-GB":I},routeMiddleware(t,e){"sw.order.detail"===e.name&&e.children.push({component:"buckaroo-payment-detail",name:"buckaroo.payment.detail",isChildren:!0,path:"/sw/order/buckaroo/detail/:id"}),t(e)},routes:{index:{component:"buckaroo-settings",path:"index",meta:{parentPath:"sw.settings.index"}}}});a("NzlU"),a("DcHO")},WO28:function(t,e){t.exports='{% block sw_order_detail_base_line_items_summary %}\n\n    <sw-card-section divider="top" secondary slim v-if="order.customFields !== null">\n        <sw-container columns="1fr 440px"\n        class="sw-order-detail__summary" v-if="order.customFields.buckarooFee !== null">\n            <sw-description-list grid="265px 1fr"\n            class="sw-order-detail__summary-data">\n                <dt>{{ $tc(\'buckaroo-payment.fee\') }}</dt>\n                <dd>{{ order.customFields.buckarooFee }}\n                    {% if order.currency.isoCode == "PLN" %}\n                        PLN\n                    {% else %}\n                        {{ order.currency.symbol }}\n                    {% endif %}\n                    </dd>\n            </sw-description-list>\n        </sw-container>\n    </sw-card-section>\n\n    {% parent %}\n    \n{% endblock %}'},akA1:function(t,e){t.exports='{% block buckaroo_payment %}\n<sw-page class="buckaroo-payment">\n    {% block buckaroo_payment_header %}\n    <template #smart-bar-header>\n        <h2>\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon name="small-arrow-medium-right" small></sw-icon>\n            {{ $tc(\'buckaroo-payment.general.title\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    {% block buckaroo_payment_actions %}\n    <template #smart-bar-actions>\n        {% block buckaroo_payment_settings_actions_feedback %}\n        <sw-button\n                @click="isSupportModalOpen = true"\n                :disabled="false"\n                variant="ghost"\n                :square="false"\n                :block="false"\n                :isLoading="false">\n            {{ $tc(\'buckaroo-payment.supportModal.menuButton\') }}\n        </sw-button>\n        {% endblock %}\n\n        {% block buckaroo_payment_settings_actions_save %}\n        <sw-button-process\n                class="sw-settings-login-registration__save-action"\n                :isLoading="isLoading"\n                :processSuccess="isSaveSuccessful"\n                :disabled="isLoading"\n                variant="primary"\n                @process-finish="saveFinish"\n                @click="onSave">\n            {{ $tc(\'buckaroo-payment.settingsForm.save\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    {% block buckaroo_payment_settings_content %}\n    <template #content>\n        <sw-modal\n                v-if="isSupportModalOpen"\n                @modal-close="isSupportModalOpen = false"\n                :title="$tc(\'buckaroo-payment.supportModal.title\')"\n                class="buckaroo-feedback sw-modal--large">\n            <sw-container columns="1fr">\n                <div class="buckaroo-feedback__col">\n                    <p class="buckaroo-feedback__desc">\n                        <a href="https://buckaroo.nl/" target="_blank" rel="noopener">\n<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="180px" height="32px" viewBox="0 0 5560 1000" preserveAspectRatio="xMidYMid meet"> <g id="M845" fill="#181717" stroke="none"> <path d="M845 853 c-35 -7 -105 -46 -131 -72 -57 -57 -59 -65 -62 -343 l-3 -258 40 0 41 0 0 213 c0 116 5 232 11 257 19 82 88 130 189 130 106 0 183 -48 196 -124 11 -59 10 -53 12 -273 l2 -203 40 0 40 0 0 243 c0 232 -1 244 -24 292 -45 97 -135 146 -265 144 -36 -1 -75 -3 -86 -6z"/> <path d="M1608 850 c-81 -21 -172 -100 -214 -187 -80 -170 -4 -369 173 -454 57 -27 77 -31 152 -32 64 -1 103 5 156 22 39 13 74 27 78 31 5 4 7 26 5 49 -3 41 -3 41 -29 27 -95 -49 -237 -65 -310 -33 -50 21 -116 82 -142 131 -30 57 -30 174 1 231 55 101 130 145 252 145 66 0 171 -27 214 -55 20 -14 21 -13 18 35 l-4 49 -56 22 c-64 25 -228 35 -294 19z"/> <path d="M4175 851 c-87 -22 -176 -96 -223 -186 -23 -43 -26 -63 -26 -140 -1 -76 3 -99 26 -146 37 -80 89 -134 166 -170 58 -28 75 -32 156 -32 72 0 104 5 150 23 76 29 147 95 183 169 25 49 28 68 28 151 0 89 -2 99 -34 158 -46 85 -107 137 -189 162 -65 20 -177 25 -237 11z m232 -94 c41 -22 97 -78 120 -120 27 -50 25 -189 -4 -244 -52 -97 -180 -156 -291 -134 -103 21 -175 80 -207 170 -47 134 23 289 154 338 49 18 185 12 228 -10z"/> <path d="M5015 851 c-134 -38 -238 -164 -253 -307 -5 -51 21 -155 50 -203 96 -156 304 -213 475 -131 123 58 184 151 191 290 5 106 -18 176 -84 249 -68 76 -133 103 -252 107 -53 2 -110 -1 -127 -5z m225 -92 c96 -43 146 -121 149 -235 3 -91 -17 -142 -78 -195 -76 -67 -152 -89 -245 -69 -199 41 -280 281 -146 432 57 66 108 88 200 88 54 0 88 -6 120 -21z"/> <path d="M80 514 l0 -337 133 5 c110 4 139 8 172 26 82 44 109 130 70 224 -4 10 -22 27 -41 39 -19 11 -34 24 -34 28 0 4 17 13 38 19 118 36 154 189 64 275 -53 49 -86 57 -253 57 l-149 0 0 -336z m329 227 c26 -24 31 -37 31 -74 0 -86 -51 -117 -192 -117 l-78 0 0 110 0 110 104 0 c101 0 105 -1 135 -29z m-58 -299 c26 -23 31 -35 32 -74 0 -27 -6 -54 -14 -64 -23 -28 -74 -44 -139 -44 l-60 0 0 105 0 105 75 0 c68 0 78 -3 106 -28z"/> <path d="M2120 515 l0 -335 40 0 40 0 0 155 c0 85 3 155 8 155 7 0 129 -129 233 -247 53 -60 55 -61 108 -62 64 -1 71 -15 -84 154 -60 66 -119 131 -130 144 l-20 23 180 174 180 174 -60 0 -60 0 -170 -165 c-93 -90 -173 -164 -177 -165 -5 0 -8 74 -8 165 l0 165 -40 0 -40 0 0 -335z"/> <path d="M3400 515 l0 -335 88 0 c49 0 115 5 147 12 164 33 205 230 68 324 l-31 20 38 37 c35 33 100 120 100 134 0 3 20 34 45 70 25 35 45 66 45 68 0 3 -21 5 -48 5 l-47 0 -72 -108 c-94 -142 -138 -182 -198 -182 l-45 0 0 145 0 145 -45 0 -45 0 0 -335z m229 -46 c65 -23 84 -128 32 -180 -27 -27 -35 -29 -100 -29 l-71 0 0 110 0 110 54 0 c29 0 67 -5 85 -11z"/> </g> <g id="M2981" fill="#d3cf27" stroke="none"> <path d="M2981 814 c-12 -32 -60 -140 -106 -239 -8 -16 -29 -64 -46 -105 -17 -41 -44 -102 -59 -135 -16 -33 -37 -82 -49 -108 l-20 -48 45 3 45 3 42 95 43 95 150 3 151 3 42 -101 43 -100 44 0 43 0 -24 57 c-14 32 -78 182 -143 333 l-118 275 -35 3 c-32 3 -36 0 -48 -34z m107 -226 c28 -64 47 -119 44 -122 -6 -7 -212 -8 -212 -1 0 6 77 180 96 217 8 16 17 28 19 26 2 -2 26 -56 53 -120z"/> </g> </svg>\n                        </a>\n                    </p>\n                </div>\n            </sw-container>\n\n            <sw-container columns="1fr 1fr">\n                <div class="buckaroo-feedback__col">\n                    <p class="buckaroo-feedback__desc">\n                        <h3>{{ $tc(\'buckaroo-payment.supportModal.support.version\') }}</h3>\n                        \n                        <div class="row">\n                            <div class="column">{{ $tc(\'buckaroo-payment.supportModal.support.your_version\') }}</div>\n                            <div class="column">{{ phpversion }}\n                                <sw-icon v-if="isPhpVersionSupport" name="default-basic-checkmark-line" color="#37d046"></sw-icon>\n                                <sw-icon v-else name="default-basic-x-line" color="#de294c"></sw-icon>\n                            </div>\n                        </div>\n                    </p>\n                </div>\n\n                <div class="buckaroo-feedback__col">\n                    <p class="buckaroo-feedback__desc">\n                        <h3>{{ $tc(\'buckaroo-payment.supportModal.support.information\') }}</h3>\n                        <p>{{ $tc(\'buckaroo-payment.supportModal.support.description\') }} <br><br></p>\n  \n                        <div class="row">\n                            <div class="column">{{ $tc(\'buckaroo-payment.supportModal.support.label1\') }}</div>\n                            <div class="column"><a target="_blank" href="https://plaza.buckaroo.nl/" rel="noopener">plaza.buckaroo.nl</a></div>\n                        </div>\n\n                        <div class="row">\n                            <div class="column">{{ $tc(\'buckaroo-payment.supportModal.support.label2\') }}</div>\n                            <div class="column">+31(0)30-711 50 50</div>\n                        </div>\n\n                        <div class="row">\n                            <div class="column">{{ $tc(\'buckaroo-payment.supportModal.support.label3\') }}</div>\n                            <div class="column"><a href="mailto:support@buckaroo.nl">support@buckaroo.nl</a></div>\n                        </div>\n\n                        <div class="row">\n                            <div class="column">{{ $tc(\'buckaroo-payment.supportModal.support.label4\') }}</div>\n                            <div class="column"><a href="https://buckaroo.nl/" target="_blank" rel="noopener">buckaroo.nl</a></div>\n                        </div>\n                    </p>\n                </div>\n            </sw-container>\n        </sw-modal>\n\n        <sw-card-view>\n            <sw-system-config\n                    ref="systemConfig"\n                    salesChannelSwitchable\n                    inherit\n                    @config-changed="onConfigChange"\n                    domain="BuckarooPayments.config">\n                <template #card-element="{ element, config }">\n                    <div v-show="displayField(element, config)">\n                    <sw-form-field-renderer\n                            v-bind="getBind(element, config)"\n                            v-model="config[element.name]"/>\n                    </div>\n                </template>\n            </sw-system-config>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n'},eZS3:function(t,e,a){},fRLX:function(t,e,a){var n=a("/bCR");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("SZ7m").default)("5b604fd0",n,!0,{})},gyNi:function(t,e){t.exports='{% block sw_order_detail_content_tabs_general %}\n    {% parent %}\n\n    <sw-tabs-item v-if="setIsBuckarooPayment" :route="{ name: \'buckaroo.payment.detail\', params: { id: $route.params.id } }" :title="$tc(\'buckaroo-payment.tabs.title\')">\n        {{ $tc(\'buckaroo-payment.tabs.title\') }}\n    </sw-tabs-item>\n    \n{% endblock %}\n\n{% block sw_order_detail_actions %}\n    <template v-if="isEditable">\n        {% parent %}\n    </template>\n{% endblock %}'},iWHm:function(t,e,a){var n=a("eZS3");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("SZ7m").default)("c9a12dba",n,!0,{})},"nww/":function(t){t.exports=JSON.parse('{"buckaroo-payment":{"fee":"Buckaroo Gebühr","order":{"refundDescription":"Erstattung für Bestellung #orderNumber"},"general":{"title":"Buckaroo","description":"Buckaroo Payment"},"settingsForm":{"save":"Speichern","titleSuccess":"Erfolg","titleError":"Fehler"},"supportModal":{"menuButton":"Version & Support","title":"Version & Support","support":{"description":"Bevor Sie den technischen Support von Buckaroo kontaktieren, rufen Sie bitte Ihren (Merchant) Schlüssel, Geheimschlüssel, Zertifikat und Zertifikat-Daumenabdruck auf.","label1":"Buckaroo Payment Plaza:","label2":"Telefon:","label3":"E-mail:","label4":"Webseite:","your_version":"Ihre PHP Version:","version":"Kompatibilität der Version","information":"Information"}},"tabs":{"title":"Buckaroo Payment","overview":"Overview"},"paymentDetail":{"refundTitle":"Rückerstattung","transactionsTitle":"Transaktionen","amountTitle":"Amount","amountTotalTitle":"Gesamtsumme","amountRefundTotalTitle":"Rückerstattung Gesamtsumme","buttonTitle":"Rückerstattung","successTitle":"Erfolg","successMessage":"Buckaroo-Erfolg erstattet ","errorTitle":"Fehler","payTitle":"Geld erhalten","payDescription":"Zahlung für Bestellung erhalten","payButton":"Geld erhalten"},"orderItems":{"title":"Zu erstattende Gegenstände","types":{"id":"id","name":"Titel","quantity":"Menge zur Rückerstattung","totalAmount":"Zwischensumme"}},"transactionsToRefund":{"title":"Rückerstattungssummen"},"transactionHistory":{"types":{"id":"id","created_at":"Datum / Uhrzeit","total":"Total","shipping_costs":"Versandkosten","total_excluding_vat":"Total ohne Mehrwertsteuer","total_including_vat":"Total einschließlich Mehrwertsteuer","vat":"Mehrwertsteuer","transaction_key":"Transaktionsschlüssel","transaction_method":"Zahlungsmethode","statuscode":"Status"}},"messageNotValid":"Dieses Feld ist ungültig.","messageNotBlank":"Dieses Feld darf nicht leer sein."}}')}},[["VVeZ","runtime","vendors-node"]]]);