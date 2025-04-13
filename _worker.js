// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto';
let guestToken = ''; 
let BotToken = ''; 
let ChatID = ''; 
let TG = 0; 
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; 
let total = 99;
let timestamp = 4102329600000;

//节点链接 + 订阅链接
let MainData = `
https://raw.githubusercontent.com/mfuu/v2ray/master/v2ray
https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list_raw.txt
https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/v2ray.txt
https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2
https://raw.githubusercontent.com/mahdibland/SSAggregator/master/sub/airport_sub_merge.txt
https://raw.githubusercontent.com/mahdibland/SSAggregator/master/sub/sub_merge.txt
https://raw.githubusercontent.com/Pawdroid/Free-servers/refs/heads/main/sub
`

let urls = [];
let subConverter = "SUBAPI.cmliussss.net";
let subConfig = "https://raw.githubusercontent.com/jeffernn/Jeffern-quantumultx/refs/heads/main/ClashAutoChose.ini";
let subProtocol = 'https';

export default {
	async fetch(request, env) {
		// ... [保持完全不变] ...
	}
};

// 保持以下所有工具函数完全不变
async function ADD(envadd) { /* 原样保留 */ }
async function nginx() { /* 原样保留 */ }
async function sendMessage(type, ip, add_data = "") { /* 原样保留 */ }
function base64Decode(str) { /* 原样保留 */ }
async function MD5MD5(text) { /* 原样保留 */ }
function clashFix(content) { /* 原样保留 */ }
async function proxyURL(proxyURL, url) { /* 原样保留 */ }
async function getSUB(api, request, 追加UA, userAgentHeader) { /* 原样保留 */ }
async function getUrl(request, targetUrl, 追加UA, userAgentHeader) { /* 原样保留 */ }
function isValidBase64(str) { /* 原样保留 */ }
async function 迁移地址列表(env, txt = 'ADD.txt') { /* 原样保留 */ }

// 修改后的KV函数
async function KV(request, env, txt = 'LINK.txt', guest) {
	const url = new URL(request.url);
	try {
		// POST处理保持原样不变
		if (request.method === "POST") { /* 原样保留 */ }

		// GET处理保持原样不变
		let content = '';
		let hasKV = !!env.KV;
		if (hasKV) { /* 原样保留 */ }

		const html = `
		<!DOCTYPE html>
		<html>
		<head>
			<title>${FileName} 订阅管理</title>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<style>
				:root {
					--primary: #2196F3;
					--secondary: #607D8B;
					--background: #f5f7fa;
					--card-bg: #ffffff;
					--shadow: 0 2px 8px rgba(0,0,0,0.1);
				}

				body {
					margin: 0;
					padding: 20px;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
					background: var(--background);
					color: #333;
					line-height: 1.6;
				}

				.container {
					max-width: 1000px;
					margin: 0 auto;
				}

				.section {
					background: var(--card-bg);
					border-radius: 12px;
					padding: 24px;
					margin-bottom: 24px;
					box-shadow: var(--shadow);
				}

				h2 {
					color: var(--primary);
					margin: 0 0 24px;
					font-size: 24px;
				}

				.link-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
					gap: 16px;
				}

				.link-card {
					padding: 16px;
					background: var(--card-bg);
					border-radius: 8px;
					border: 1px solid #e0e0e0;
					transition: transform 0.2s;
				}

				.link-card:hover {
					transform: translateY(-2px);
				}

				.copy-link {
					display: flex;
					align-items: center;
					gap: 8px;
					color: var(--primary);
					cursor: pointer;
					padding: 8px;
					border-radius: 6px;
					transition: background 0.2s;
				}

				.copy-link:hover {
					background: rgba(33, 150, 243, 0.1);
				}

				.qrcode-container {
					margin: 16px 0;
					padding: 12px;
					background: white;
					border-radius: 8px;
				}

				.editor {
					width: 100%;
					height: 400px;
					padding: 12px;
					border: 1px solid #ddd;
					border-radius: 8px;
					font-family: Monaco, Consolas, monospace;
					resize: vertical;
				}

				.btn {
					padding: 8px 20px;
					border: none;
					border-radius: 6px;
					cursor: pointer;
					transition: opacity 0.2s;
				}

				.btn-primary {
					background: var(--primary);
					color: white;
				}

				.config-list {
					display: grid;
					gap: 12px;
					padding: 0;
					list-style: none;
				}

				.config-list li {
					padding: 12px;
					background: #f8f9fa;
					border-radius: 6px;
					font-family: monospace;
				}
			</style>
			<script src="https://cdn.jsdelivr.net/npm/@keeex/qrcodejs-kx@1.0.2/qrcode.min.js"></script>
		</head>
		<body>
			<div class="container">
				<div class="section">
					<h2>📡 订阅管理</h2>
					
					<div class="link-grid">
						<div class="link-card">
							<div class="copy-link" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?sub','qrcode_0')">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M8 4v12h12V4H8zM6 2h16v16H6V2zM4 6H2v18h18v-2"></path>
								</svg>
								<span>自适应订阅</span>
							</div>
							<div id="qrcode_0" class="qrcode-container"></div>
						</div>

						<div class="link-card">
							<div class="copy-link" onclick="copyToClipboard('https://${url.hostname}/${mytoken}?b64','qrcode_1')">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M8 4v12h12V4H8zM6 2h16v16H6V2zM4 6H2v18h18v-2"></path>
								</svg>
								<span>Base64订阅</span>
							</div>
							<div id="qrcode_1" class="qrcode-container"></div>
						</div>

						<!-- 其他订阅类型区块 -->
					</div>
				</div>

				<div class="section">
					<h3>👥 访客订阅</h3>
					<button onclick="toggleNotice()">显示/隐藏</button>
					<div id="noticeContent" style="display:none;">
						<!-- 访客订阅内容保持原功能 -->
					</div>
				</div>

				${hasKV ? `
				<div class="section">
					<h3>✏️ 订阅编辑</h3>
					<textarea class="editor">${content}</textarea>
					<button class="btn btn-primary" onclick="saveContent(this)">保存配置</button>
					<span id="saveStatus"></span>
				</div>` : ''}
			</div>

			<script>
			// 保持原有JavaScript完全不变
			function copyToClipboard(text, qrcode) { /* 原样保留 */ }
			function saveContent(button) { /* 原样保留 */ }
			function toggleNotice() { /* 原样保留 */ }
			</script>
		</body>
		</html>
		`;

		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" }
		});
	} catch (error) {
		// 错误处理保持原样
	}
}
