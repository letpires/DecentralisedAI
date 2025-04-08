/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/buy-credits/route";
exports.ids = ["app/api/buy-credits/route"];
exports.modules = {

/***/ "(rsc)/./app/api/buy-credits/route.ts":
/*!**************************************!*\
  !*** ./app/api/buy-credits/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_services_token_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/services/token-payment-service */ \"(rsc)/./app/services/token-payment-service.ts\");\n\n\nconst tokenService = new _app_services_token_payment_service__WEBPACK_IMPORTED_MODULE_1__.TokenPaymentService();\nasync function POST(req) {\n    try {\n        const { amount } = await req.json();\n        if (!amount) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Amount is required'\n            }, {\n                status: 400\n            });\n        }\n        const txHash = await tokenService.buyTokens(amount);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            txHash\n        });\n    } catch (error) {\n        console.error('Error buying tokens:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error instanceof Error ? error.message : 'Failed to buy tokens'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2J1eS1jcmVkaXRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNnQztBQUUzRSxNQUFNRSxlQUFlLElBQUlELG9GQUFtQkE7QUFFckMsZUFBZUUsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBRWpDLElBQUksQ0FBQ0QsUUFBUTtZQUNYLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXFCLEdBQzlCO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNQyxTQUFTLE1BQU1QLGFBQWFRLFNBQVMsQ0FBQ0w7UUFFNUMsT0FBT0wscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFSyxTQUFTO1lBQU1GO1FBQU87SUFFbkQsRUFBRSxPQUFPRixPQUFPO1FBQ2RLLFFBQVFMLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU9QLHFEQUFZQSxDQUFDTSxJQUFJLENBQ3RCO1lBQUVDLE9BQU9BLGlCQUFpQk0sUUFBUU4sTUFBTU8sT0FBTyxHQUFHO1FBQXVCLEdBQ3pFO1lBQUVOLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcQ29tcHV0ZXIgU2NpZW5jZVxcRW5jb2RlXFxXZWVrIDVcXERlY2VudHJhbGlzZWRBSVxcd2VlazVcXGFwcFxcYXBpXFxidXktY3JlZGl0c1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBUb2tlblBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnQC9hcHAvc2VydmljZXMvdG9rZW4tcGF5bWVudC1zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHRva2VuU2VydmljZSA9IG5ldyBUb2tlblBheW1lbnRTZXJ2aWNlKCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFhbW91bnQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6ICdBbW91bnQgaXMgcmVxdWlyZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHhIYXNoID0gYXdhaXQgdG9rZW5TZXJ2aWNlLmJ1eVRva2VucyhhbW91bnQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB0eEhhc2ggfSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBidXlpbmcgdG9rZW5zOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGJ1eSB0b2tlbnMnIH0sIFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlRva2VuUGF5bWVudFNlcnZpY2UiLCJ0b2tlblNlcnZpY2UiLCJQT1NUIiwicmVxIiwiYW1vdW50IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidHhIYXNoIiwiYnV5VG9rZW5zIiwic3VjY2VzcyIsImNvbnNvbGUiLCJFcnJvciIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/buy-credits/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/services/token-payment-service.ts":
/*!***********************************************!*\
  !*** ./app/services/token-payment-service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TokenPaymentService: () => (/* binding */ TokenPaymentService)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"(rsc)/./node_modules/ethers/lib.esm/providers/provider-jsonrpc.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"(rsc)/./node_modules/ethers/lib.esm/wallet/wallet.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"(rsc)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(rsc)/./node_modules/ethers/lib.esm/utils/units.js\");\n\nconst TOKEN_ABI = [\n    \"function balanceOf(address owner) view returns (uint256)\",\n    \"function transfer(address to, uint256 amount) returns (bool)\",\n    \"function approve(address spender, uint256 amount) returns (bool)\",\n    \"function buyTokens() payable\",\n    \"function decimals() view returns (uint8)\"\n];\nconst PAYMENT_ABI = [\n    \"function payForJoke() returns (bool)\",\n    \"function jokePrice() view returns (uint256)\"\n];\nclass TokenPaymentService {\n    constructor(){\n        // Set Sepolia as default network\n        const DEFAULT_SEPOLIA_RPC = 'https://rpc.sepolia.org';\n        const SEPOLIA_CHAIN_ID = 11155111;\n        // Initialize provider with Sepolia network (v6 syntax)\n        const rpcUrl = process.env.RPC_URL || DEFAULT_SEPOLIA_RPC;\n        this.provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.JsonRpcProvider(rpcUrl, {\n            chainId: SEPOLIA_CHAIN_ID,\n            name: 'sepolia'\n        });\n        // Initialize wallet with private key (v6 syntax)\n        this.wallet = new ethers__WEBPACK_IMPORTED_MODULE_1__.Wallet(process.env.PRIVATE_KEY, this.provider);\n        // Replace with your deployed contract addresses\n        const TOKEN_CONTRACT_ADDRESS = process.env.TOKEN_CONTRACT_ADDRESS;\n        const PAYMENT_CONTRACT_ADDRESS = process.env.PAYMENT_CONTRACT_ADDRESS;\n        this.tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_ABI, this.wallet);\n        this.paymentContract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(PAYMENT_CONTRACT_ADDRESS, PAYMENT_ABI, this.wallet);\n    }\n    async buyTokens(amountInEth) {\n        const tx = await this.tokenContract.buyTokens({\n            value: ethers__WEBPACK_IMPORTED_MODULE_3__.parseEther(amountInEth) // v6 syntax\n        });\n        const receipt = await tx.wait();\n        return receipt.hash; // v6 uses .hash instead of .transactionHash\n    }\n    async getTokenBalance() {\n        const decimals = await this.tokenContract.decimals();\n        const balance = await this.tokenContract.balanceOf(this.wallet.address);\n        return ethers__WEBPACK_IMPORTED_MODULE_3__.formatUnits(balance, decimals); // v6 syntax\n    }\n    async getJokePrice() {\n        const price = await this.paymentContract.jokePrice();\n        return price.toString();\n    }\n    async approveTokens() {\n        // Get joke price\n        const jokePrice = await this.paymentContract.jokePrice();\n        // Approve payment contract to spend tokens\n        const tx = await this.tokenContract.approve(this.paymentContract.address, jokePrice);\n        const receipt = await tx.wait();\n        return receipt.hash; // v6 uses .hash instead of .transactionHash\n    }\n    async payForJoke() {\n        // First approve tokens\n        await this.approveTokens();\n        // Then pay for joke\n        const tx = await this.paymentContract.payForJoke();\n        await tx.wait();\n        return true;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvc2VydmljZXMvdG9rZW4tcGF5bWVudC1zZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVk7SUFDaEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsTUFBTUMsY0FBYztJQUNsQjtJQUNBO0NBQ0Q7QUFFTSxNQUFNQztJQU1YQyxhQUFjO1FBQ1osaUNBQWlDO1FBQ2pDLE1BQU1DLHNCQUFzQjtRQUM1QixNQUFNQyxtQkFBbUI7UUFFekIsdURBQXVEO1FBQ3ZELE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTyxJQUFJTDtRQUN0QyxJQUFJLENBQUNNLFFBQVEsR0FBRyxJQUFJWCxtREFBc0IsQ0FBQ08sUUFBUTtZQUNqRE0sU0FBU1A7WUFDVFEsTUFBTTtRQUNSO1FBRUEsaURBQWlEO1FBQ2pELElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUlmLDBDQUFhLENBQUNRLFFBQVFDLEdBQUcsQ0FBQ1EsV0FBVyxFQUFHLElBQUksQ0FBQ04sUUFBUTtRQUV2RSxnREFBZ0Q7UUFDaEQsTUFBTU8seUJBQXlCVixRQUFRQyxHQUFHLENBQUNTLHNCQUFzQjtRQUNqRSxNQUFNQywyQkFBMkJYLFFBQVFDLEdBQUcsQ0FBQ1Usd0JBQXdCO1FBRXJFLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUlwQiw0Q0FBZSxDQUN0Q2tCLHdCQUNBakIsV0FDQSxJQUFJLENBQUNjLE1BQU07UUFHYixJQUFJLENBQUNPLGVBQWUsR0FBRyxJQUFJdEIsNENBQWUsQ0FDeENtQiwwQkFDQWpCLGFBQ0EsSUFBSSxDQUFDYSxNQUFNO0lBRWY7SUFFQSxNQUFNUSxVQUFVQyxXQUFtQixFQUFtQjtRQUNwRCxNQUFNQyxLQUFLLE1BQU0sSUFBSSxDQUFDTCxhQUFhLENBQUNHLFNBQVMsQ0FBQztZQUM1Q0csT0FBTzFCLDhDQUFpQixDQUFDd0IsYUFBYSxZQUFZO1FBQ3BEO1FBQ0EsTUFBTUksVUFBVSxNQUFNSCxHQUFHSSxJQUFJO1FBQzdCLE9BQU9ELFFBQVFFLElBQUksRUFBRSw0Q0FBNEM7SUFDbkU7SUFFQSxNQUFNQyxrQkFBbUM7UUFDdkMsTUFBTUMsV0FBVyxNQUFNLElBQUksQ0FBQ1osYUFBYSxDQUFDWSxRQUFRO1FBQ2xELE1BQU1DLFVBQVUsTUFBTSxJQUFJLENBQUNiLGFBQWEsQ0FBQ2MsU0FBUyxDQUFDLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ29CLE9BQU87UUFDdEUsT0FBT25DLCtDQUFrQixDQUFDaUMsU0FBU0QsV0FBVyxZQUFZO0lBQzVEO0lBRUEsTUFBTUssZUFBZ0M7UUFDcEMsTUFBTUMsUUFBUSxNQUFNLElBQUksQ0FBQ2hCLGVBQWUsQ0FBQ2lCLFNBQVM7UUFDbEQsT0FBT0QsTUFBTUUsUUFBUTtJQUN2QjtJQUVBLE1BQU1DLGdCQUFpQztRQUNyQyxpQkFBaUI7UUFDakIsTUFBTUYsWUFBWSxNQUFNLElBQUksQ0FBQ2pCLGVBQWUsQ0FBQ2lCLFNBQVM7UUFFdEQsMkNBQTJDO1FBQzNDLE1BQU1kLEtBQUssTUFBTSxJQUFJLENBQUNMLGFBQWEsQ0FBQ3NCLE9BQU8sQ0FDekMsSUFBSSxDQUFDcEIsZUFBZSxDQUFDYSxPQUFPLEVBQzVCSTtRQUVGLE1BQU1YLFVBQVUsTUFBTUgsR0FBR0ksSUFBSTtRQUM3QixPQUFPRCxRQUFRRSxJQUFJLEVBQUUsNENBQTRDO0lBQ25FO0lBRUEsTUFBTWEsYUFBK0I7UUFDbkMsdUJBQXVCO1FBQ3ZCLE1BQU0sSUFBSSxDQUFDRixhQUFhO1FBRXhCLG9CQUFvQjtRQUNwQixNQUFNaEIsS0FBSyxNQUFNLElBQUksQ0FBQ0gsZUFBZSxDQUFDcUIsVUFBVTtRQUNoRCxNQUFNbEIsR0FBR0ksSUFBSTtRQUNiLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJDOlxcQ29tcHV0ZXIgU2NpZW5jZVxcRW5jb2RlXFxXZWVrIDVcXERlY2VudHJhbGlzZWRBSVxcd2VlazVcXGFwcFxcc2VydmljZXNcXHRva2VuLXBheW1lbnQtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xyXG5cclxuY29uc3QgVE9LRU5fQUJJID0gW1xyXG4gIFwiZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3Mgb3duZXIpIHZpZXcgcmV0dXJucyAodWludDI1NilcIixcclxuICBcImZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgdG8sIHVpbnQyNTYgYW1vdW50KSByZXR1cm5zIChib29sKVwiLFxyXG4gIFwiZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSByZXR1cm5zIChib29sKVwiLFxyXG4gIFwiZnVuY3Rpb24gYnV5VG9rZW5zKCkgcGF5YWJsZVwiLFxyXG4gIFwiZnVuY3Rpb24gZGVjaW1hbHMoKSB2aWV3IHJldHVybnMgKHVpbnQ4KVwiXHJcbl07XHJcblxyXG5jb25zdCBQQVlNRU5UX0FCSSA9IFtcclxuICBcImZ1bmN0aW9uIHBheUZvckpva2UoKSByZXR1cm5zIChib29sKVwiLFxyXG4gIFwiZnVuY3Rpb24gam9rZVByaWNlKCkgdmlldyByZXR1cm5zICh1aW50MjU2KVwiXHJcbl07XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXltZW50U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBwcm92aWRlcjogZXRoZXJzLkpzb25ScGNQcm92aWRlcjtcclxuICBwcml2YXRlIHdhbGxldDogZXRoZXJzLldhbGxldDtcclxuICBwcml2YXRlIHRva2VuQ29udHJhY3Q6IGV0aGVycy5Db250cmFjdDtcclxuICBwcml2YXRlIHBheW1lbnRDb250cmFjdDogZXRoZXJzLkNvbnRyYWN0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIFNldCBTZXBvbGlhIGFzIGRlZmF1bHQgbmV0d29ya1xyXG4gICAgY29uc3QgREVGQVVMVF9TRVBPTElBX1JQQyA9ICdodHRwczovL3JwYy5zZXBvbGlhLm9yZyc7XHJcbiAgICBjb25zdCBTRVBPTElBX0NIQUlOX0lEID0gMTExNTUxMTE7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpemUgcHJvdmlkZXIgd2l0aCBTZXBvbGlhIG5ldHdvcmsgKHY2IHN5bnRheClcclxuICAgIGNvbnN0IHJwY1VybCA9IHByb2Nlc3MuZW52LlJQQ19VUkwgfHwgREVGQVVMVF9TRVBPTElBX1JQQztcclxuICAgIHRoaXMucHJvdmlkZXIgPSBuZXcgZXRoZXJzLkpzb25ScGNQcm92aWRlcihycGNVcmwsIHtcclxuICAgICAgY2hhaW5JZDogU0VQT0xJQV9DSEFJTl9JRCxcclxuICAgICAgbmFtZTogJ3NlcG9saWEnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHdhbGxldCB3aXRoIHByaXZhdGUga2V5ICh2NiBzeW50YXgpXHJcbiAgICB0aGlzLndhbGxldCA9IG5ldyBldGhlcnMuV2FsbGV0KHByb2Nlc3MuZW52LlBSSVZBVEVfS0VZISwgdGhpcy5wcm92aWRlcik7XHJcbiAgICBcclxuICAgIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGRlcGxveWVkIGNvbnRyYWN0IGFkZHJlc3Nlc1xyXG4gICAgY29uc3QgVE9LRU5fQ09OVFJBQ1RfQUREUkVTUyA9IHByb2Nlc3MuZW52LlRPS0VOX0NPTlRSQUNUX0FERFJFU1MhO1xyXG4gICAgY29uc3QgUEFZTUVOVF9DT05UUkFDVF9BRERSRVNTID0gcHJvY2Vzcy5lbnYuUEFZTUVOVF9DT05UUkFDVF9BRERSRVNTITtcclxuICAgIFxyXG4gICAgdGhpcy50b2tlbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgVE9LRU5fQ09OVFJBQ1RfQUREUkVTUyxcclxuICAgICAgVE9LRU5fQUJJLFxyXG4gICAgICB0aGlzLndhbGxldFxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgdGhpcy5wYXltZW50Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICBQQVlNRU5UX0NPTlRSQUNUX0FERFJFU1MsXHJcbiAgICAgIFBBWU1FTlRfQUJJLFxyXG4gICAgICB0aGlzLndhbGxldFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGJ1eVRva2VucyhhbW91bnRJbkV0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHR4ID0gYXdhaXQgdGhpcy50b2tlbkNvbnRyYWN0LmJ1eVRva2Vucyh7XHJcbiAgICAgIHZhbHVlOiBldGhlcnMucGFyc2VFdGhlcihhbW91bnRJbkV0aCkgLy8gdjYgc3ludGF4XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XHJcbiAgICByZXR1cm4gcmVjZWlwdC5oYXNoOyAvLyB2NiB1c2VzIC5oYXNoIGluc3RlYWQgb2YgLnRyYW5zYWN0aW9uSGFzaFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0VG9rZW5CYWxhbmNlKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBkZWNpbWFscyA9IGF3YWl0IHRoaXMudG9rZW5Db250cmFjdC5kZWNpbWFscygpO1xyXG4gICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMudG9rZW5Db250cmFjdC5iYWxhbmNlT2YodGhpcy53YWxsZXQuYWRkcmVzcyk7XHJcbiAgICByZXR1cm4gZXRoZXJzLmZvcm1hdFVuaXRzKGJhbGFuY2UsIGRlY2ltYWxzKTsgLy8gdjYgc3ludGF4XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRKb2tlUHJpY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHByaWNlID0gYXdhaXQgdGhpcy5wYXltZW50Q29udHJhY3Quam9rZVByaWNlKCk7XHJcbiAgICByZXR1cm4gcHJpY2UudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGFwcHJvdmVUb2tlbnMoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIC8vIEdldCBqb2tlIHByaWNlXHJcbiAgICBjb25zdCBqb2tlUHJpY2UgPSBhd2FpdCB0aGlzLnBheW1lbnRDb250cmFjdC5qb2tlUHJpY2UoKTtcclxuICAgIFxyXG4gICAgLy8gQXBwcm92ZSBwYXltZW50IGNvbnRyYWN0IHRvIHNwZW5kIHRva2Vuc1xyXG4gICAgY29uc3QgdHggPSBhd2FpdCB0aGlzLnRva2VuQ29udHJhY3QuYXBwcm92ZShcclxuICAgICAgdGhpcy5wYXltZW50Q29udHJhY3QuYWRkcmVzcyxcclxuICAgICAgam9rZVByaWNlXHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHR4LndhaXQoKTtcclxuICAgIHJldHVybiByZWNlaXB0Lmhhc2g7IC8vIHY2IHVzZXMgLmhhc2ggaW5zdGVhZCBvZiAudHJhbnNhY3Rpb25IYXNoXHJcbiAgfVxyXG5cclxuICBhc3luYyBwYXlGb3JKb2tlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgLy8gRmlyc3QgYXBwcm92ZSB0b2tlbnNcclxuICAgIGF3YWl0IHRoaXMuYXBwcm92ZVRva2VucygpO1xyXG4gICAgXHJcbiAgICAvLyBUaGVuIHBheSBmb3Igam9rZVxyXG4gICAgY29uc3QgdHggPSBhd2FpdCB0aGlzLnBheW1lbnRDb250cmFjdC5wYXlGb3JKb2tlKCk7XHJcbiAgICBhd2FpdCB0eC53YWl0KCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImV0aGVycyIsIlRPS0VOX0FCSSIsIlBBWU1FTlRfQUJJIiwiVG9rZW5QYXltZW50U2VydmljZSIsImNvbnN0cnVjdG9yIiwiREVGQVVMVF9TRVBPTElBX1JQQyIsIlNFUE9MSUFfQ0hBSU5fSUQiLCJycGNVcmwiLCJwcm9jZXNzIiwiZW52IiwiUlBDX1VSTCIsInByb3ZpZGVyIiwiSnNvblJwY1Byb3ZpZGVyIiwiY2hhaW5JZCIsIm5hbWUiLCJ3YWxsZXQiLCJXYWxsZXQiLCJQUklWQVRFX0tFWSIsIlRPS0VOX0NPTlRSQUNUX0FERFJFU1MiLCJQQVlNRU5UX0NPTlRSQUNUX0FERFJFU1MiLCJ0b2tlbkNvbnRyYWN0IiwiQ29udHJhY3QiLCJwYXltZW50Q29udHJhY3QiLCJidXlUb2tlbnMiLCJhbW91bnRJbkV0aCIsInR4IiwidmFsdWUiLCJwYXJzZUV0aGVyIiwicmVjZWlwdCIsIndhaXQiLCJoYXNoIiwiZ2V0VG9rZW5CYWxhbmNlIiwiZGVjaW1hbHMiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwiYWRkcmVzcyIsImZvcm1hdFVuaXRzIiwiZ2V0Sm9rZVByaWNlIiwicHJpY2UiLCJqb2tlUHJpY2UiLCJ0b1N0cmluZyIsImFwcHJvdmVUb2tlbnMiLCJhcHByb3ZlIiwicGF5Rm9ySm9rZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/services/token-payment-service.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbuy-credits%2Froute&page=%2Fapi%2Fbuy-credits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbuy-credits%2Froute.ts&appDir=C%3A%5CComputer%20Science%5CEncode%5CWeek%205%5CDecentralisedAI%5Cweek5%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CComputer%20Science%5CEncode%5CWeek%205%5CDecentralisedAI%5Cweek5&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbuy-credits%2Froute&page=%2Fapi%2Fbuy-credits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbuy-credits%2Froute.ts&appDir=C%3A%5CComputer%20Science%5CEncode%5CWeek%205%5CDecentralisedAI%5Cweek5%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CComputer%20Science%5CEncode%5CWeek%205%5CDecentralisedAI%5Cweek5&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Computer_Science_Encode_Week_5_DecentralisedAI_week5_app_api_buy_credits_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/buy-credits/route.ts */ \"(rsc)/./app/api/buy-credits/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/buy-credits/route\",\n        pathname: \"/api/buy-credits\",\n        filename: \"route\",\n        bundlePath: \"app/api/buy-credits/route\"\n    },\n    resolvedPagePath: \"C:\\\\Computer Science\\\\Encode\\\\Week 5\\\\DecentralisedAI\\\\week5\\\\app\\\\api\\\\buy-credits\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Computer_Science_Encode_Week_5_DecentralisedAI_week5_app_api_buy_credits_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZidXktY3JlZGl0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYnV5LWNyZWRpdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZidXktY3JlZGl0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDQ29tcHV0ZXIlMjBTY2llbmNlJTVDRW5jb2RlJTVDV2VlayUyMDUlNUNEZWNlbnRyYWxpc2VkQUklNUN3ZWVrNSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q0NvbXB1dGVyJTIwU2NpZW5jZSU1Q0VuY29kZSU1Q1dlZWslMjA1JTVDRGVjZW50cmFsaXNlZEFJJTVDd2VlazUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzZDO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxDb21wdXRlciBTY2llbmNlXFxcXEVuY29kZVxcXFxXZWVrIDVcXFxcRGVjZW50cmFsaXNlZEFJXFxcXHdlZWs1XFxcXGFwcFxcXFxhcGlcXFxcYnV5LWNyZWRpdHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2J1eS1jcmVkaXRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYnV5LWNyZWRpdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2J1eS1jcmVkaXRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcQ29tcHV0ZXIgU2NpZW5jZVxcXFxFbmNvZGVcXFxcV2VlayA1XFxcXERlY2VudHJhbGlzZWRBSVxcXFx3ZWVrNVxcXFxhcHBcXFxcYXBpXFxcXGJ1eS1jcmVkaXRzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbuy-credits%2Froute&page=%2Fapi%2Fbuy-credits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbuy-credits%2Froute.ts&appDir=C%3A%5CComputer%20Science%5CEncode%5CWeek%205%5CDecentralisedAI%5Cweek5%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CComputer%20Science%5CEncode%5CWeek%205%5CDecentralisedAI%5Cweek5&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/ethers","vendor-chunks/@noble","vendor-chunks/aes-js","vendor-chunks/@adraffy"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fbuy-credits%2Froute&page=%2Fapi%2Fbuy-credits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbuy-credits%2Froute.ts&appDir=C%3A%5CComputer%20Science%5CEncode%5CWeek%205%5CDecentralisedAI%5Cweek5%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CComputer%20Science%5CEncode%5CWeek%205%5CDecentralisedAI%5Cweek5&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();