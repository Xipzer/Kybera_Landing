/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Wallet,
  Send,
  ArrowLeftRight,
  BarChart3,
  MessageSquare,
  Shield,
  Search,
  AlertTriangle,
  Zap,
  Globe,
  Terminal,
  Link2,
  Info,
  Server,
  Lock,
  Users,
  TrendingUp,
  Eye,
} from 'lucide-react'
import ScrollTimeline, { type TimelineSection } from './ScrollTimeline'
import CopyButton from './CopyButton'
import { chains } from '../data/chains'
import { APP_URL, OPENCLAW_GITHUB_URL, SCROLL_DELAY_MS } from '../constants'
import { fadeInUp } from '../utils/animations'
import styles from './Docs.module.css'

const docsSections: (TimelineSection & { fullName: string })[] = [
  { id: 'overview', label: '1', name: 'Overview', fullName: 'Overview' },
  { id: 'wallet', label: '2', name: 'Wallet', fullName: 'Wallet Management' },
  { id: 'ai-assistant', label: '3', name: 'AI Assistant', fullName: 'AI Assistant' },
  { id: 'research', label: '4', name: 'Research', fullName: 'Token Research & Analysis' },
  { id: 'openclaw-setup', label: '5', name: 'OpenClaw', fullName: 'Connecting OpenClaw' },
  { id: 'remote', label: '6', name: 'Remote', fullName: 'Remote & Hosted Instances' },
  { id: 'quick-connect', label: '7', name: 'Quick Connect', fullName: 'Quick Connect' },
  { id: 'security', label: '8', name: 'Security', fullName: 'Security' },
  { id: 'troubleshooting', label: '9', name: 'Troubleshoot', fullName: 'Troubleshooting' },
]

const Docs = () => {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, SCROLL_DELAY_MS)
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className={styles.docs}>
      <ScrollTimeline sections={docsSections} />
      <div className={styles.docsContainer}>
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </motion.div>

        <motion.div className={styles.pageHeader} initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className={styles.pageTitle}>
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Everything you need to get started with Kybera - from managing your multi-chain portfolio to connecting AI-powered token research.
          </p>
        </motion.div>

        <motion.div className={styles.toc} initial="hidden" animate="visible" variants={fadeInUp}>
          <div className={styles.tocTitle}>Contents</div>
          <ul className={styles.tocList}>
            {docsSections.map((section, i) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={styles.tocLink}>
                  <span className={styles.tocNumber}>{String(i + 1).padStart(2, '0')}</span>
                  {section.fullName}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="overview" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.sectionSubtitle}>What is Kybera?</p>
          <p className={styles.sectionText}>
            Kybera is a <strong>non-custodial, multi-chain cryptocurrency wallet</strong> with an integrated AI assistant and AI-powered token research. It runs entirely in your browser - your private keys are encrypted locally and never leave your device.
          </p>
          <p className={styles.sectionText}>
            Whether you're managing a portfolio across multiple chains, swapping tokens, bridging assets, or researching new launches, Kybera provides the tools you need in one interface.
          </p>
        </motion.div>

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="wallet" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>Wallet Management</h2>
          <p className={styles.sectionSubtitle}>Multi-chain portfolio in one place</p>
          <p className={styles.sectionText}>
            Kybera supports <strong>seven blockchain networks</strong> out of the box, with a unified interface for viewing balances, sending tokens, and managing your assets.
          </p>

          <div className={styles.chainGrid}>
            {chains.map((chain) => (
              <div key={chain.name} className={styles.chainItem}>
                <img src={chain.logo} alt={chain.name} className={styles.chainLogo} />
                {chain.name}
              </div>
            ))}
          </div>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Wallet size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Portfolio Overview</h4>
                <p>View your combined holdings across all supported chains with real-time price data and token balances.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Send size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Send &amp; Receive</h4>
                <p>Transfer tokens on any supported chain. Supports both EVM addresses and Solana public keys.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><ArrowLeftRight size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Swap Tokens</h4>
                <p>Trade tokens directly within the wallet using integrated DEX aggregators - Jupiter for Solana, KyberSwap for EVM chains.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Link2 size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Cross-Chain Bridging</h4>
                <p>Move assets between chains using the integrated Relay bridge. Bridge from any supported EVM chain to another.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><BarChart3 size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Price Tracking</h4>
                <p>Real-time token prices and market data pulled from CoinGecko, keeping your portfolio valuations up to date.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="ai-assistant" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>AI Assistant</h2>
          <p className={styles.sectionSubtitle}>Natural language wallet control</p>
          <p className={styles.sectionText}>
            Kybera includes a built-in <strong>AI assistant</strong> powered by OpenClaw that can execute wallet operations through natural conversation. Instead of navigating menus and filling forms, you can simply tell the assistant what you want to do.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><MessageSquare size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Full Wallet Control</h4>
                <p>Create wallet groups, add wallets, rename assets, switch networks, check balances, get swap quotes - all through natural language commands.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Shield size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Confirmation for Risky Actions</h4>
                <p>High-risk operations like creating or deleting wallets require explicit user approval. You'll see a confirmation dialog with action details before anything is executed.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Eye size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Context-Aware</h4>
                <p>The assistant understands your current wallet state, balances, and connected networks to provide relevant responses and execute the right actions.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Zap size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Auto-Updating Skills</h4>
                <p>The AI fetches its capabilities from a hosted skill file, ensuring you always have access to the latest wallet actions without app updates.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={styles.divider} />

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="research" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>Token Research &amp; Analysis</h2>
          <p className={styles.sectionSubtitle}>AI-powered OSINT for token due diligence</p>
          <p className={styles.sectionText}>
            Kybera's research feature connects to an <strong>OpenClaw Gateway</strong> to perform comprehensive AI-driven analysis on any token. Paste a contract address and get a full research report covering market data, developer background, holder distribution, and risk assessment.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItemRed}>
              <div className={styles.featureIconRed}><Search size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Contract Analysis</h4>
                <p>Automatic contract verification status, deployer wallet tracing, and developer identification through on-chain data.</p>
              </div>
            </div>
            <div className={styles.featureItemRed}>
              <div className={styles.featureIconRed}><Users size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Holder Distribution</h4>
                <p>Breakdown of top holders, deployer retention, and analysis for concentrated ownership or suspicious patterns.</p>
              </div>
            </div>
            <div className={styles.featureItemRed}>
              <div className={styles.featureIconRed}><TrendingUp size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Market &amp; Liquidity Data</h4>
                <p>Real-time price, market cap, trading volume, and liquidity depth pulled from DexScreener and on-chain sources.</p>
              </div>
            </div>
            <div className={styles.featureItemRed}>
              <div className={styles.featureIconRed}><AlertTriangle size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Risk Assessment</h4>
                <p>Every token receives a clear risk rating - SAFE, POTENTIAL, HIGH RISK, or AVOID - with detailed reasoning and highlighted red flags.</p>
              </div>
            </div>
            <div className={styles.featureItemRed}>
              <div className={styles.featureIconRed}><Zap size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Streaming Results</h4>
                <p>Watch the AI research unfold in real-time as it streams findings. Results are compiled into structured research cards you can act on immediately.</p>
              </div>
            </div>
          </div>

          <div className={styles.calloutRed}>
            <AlertTriangle size={18} className={styles.calloutIconRed} />
            <div className={styles.calloutText}>
              <strong>Note:</strong> Token research requires an active OpenClaw Gateway connection. See the setup instructions below to get started.
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="openclaw-setup" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>Connecting OpenClaw</h2>
          <p className={styles.sectionSubtitle}>Set up AI-powered token research</p>
          <p className={styles.sectionText}>
            <strong>OpenClaw</strong> is an open-source AI gateway that runs on your machine (or a remote server) and powers Kybera's token research capabilities. It connects to Kybera over WebSocket, allowing the AI to perform deep OSINT analysis on any token you throw at it.
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumberRed}>1</div>
              <div className={styles.stepContent}>
                <h4>Install OpenClaw</h4>
                <p>Run the OpenClaw installer to set up the gateway on your machine.</p>
                <div className={styles.codeBlockRed}>
                  <code>npx openclaw@latest</code>
                  <CopyButton text="npx openclaw@latest" className={styles.copyBtn} />
                </div>
              </div>
              <div className={styles.stepConnectorRed} />
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumberRed}>2</div>
              <div className={styles.stepContent}>
                <h4>Open Kybera Settings</h4>
                <p>
                  In the Kybera app, open <strong>Settings</strong> and navigate to the <strong>OpenClaw Gateway</strong> section. Enter your Gateway URL.
                </p>
                <div className={styles.codeBlockRed}>
                  <code>ws://localhost:3100</code>
                  <CopyButton text="ws://localhost:3100" className={styles.copyBtn} />
                </div>
              </div>
              <div className={styles.stepConnectorRed} />
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumberRed}>3</div>
              <div className={styles.stepContent}>
                <h4>Test &amp; Save</h4>
                <p>
                  Click <strong>Test Connection</strong> to verify Kybera can reach your gateway. If the connection succeeds, hit <strong>Save</strong>. You can also enable <strong>Auto-connect on startup</strong> so Kybera connects automatically each time you open the app.
                </p>
              </div>
              <div className={styles.stepConnectorRed} />
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumberRed}>4</div>
              <div className={styles.stepContent}>
                <h4>Start Researching</h4>
                <p>
                  Head to the <strong>Research</strong> tab, paste any contract address (EVM or Solana), and the AI will begin a comprehensive analysis. Results stream in real-time and compile into actionable research cards.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.calloutRed}>
            <Info size={18} className={styles.calloutIconRed} />
            <div className={styles.calloutText}>
              If you have an auth token configured on your OpenClaw Gateway, enter it in the <strong>Auth Token</strong> field in Kybera's settings. This is optional for local instances but recommended for remote deployments.
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="remote" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>Remote &amp; Hosted Instances</h2>
          <p className={styles.sectionSubtitle}>Connect to OpenClaw running on an external server</p>
          <p className={styles.sectionText}>
            OpenClaw doesn't have to run locally. You can host a Gateway instance on any server and connect Kybera to it remotely. This is useful if you want a persistent research gateway running 24/7, or if you want to share an instance across devices.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItemRed}>
              <div className={styles.featureIconRed}><Globe size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Use WSS for Remote Connections</h4>
                <p>
                  Remote instances must use <strong>wss://</strong> (WebSocket Secure) instead of ws://. Browsers require TLS for non-localhost WebSocket connections when the page is served over HTTPS.
                </p>
              </div>
            </div>
            <div className={styles.featureItemRed}>
              <div className={styles.featureIconRed}><Lock size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Set an Auth Token</h4>
                <p>
                  For any internet-facing Gateway, configure an auth token in OpenClaw and enter the same token in Kybera's settings. This prevents unauthorized access to your AI gateway.
                </p>
              </div>
            </div>
            <div className={styles.featureItemRed}>
              <div className={styles.featureIconRed}><Server size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Example Remote URL</h4>
                <p>A typical remote configuration would look like this:</p>
              </div>
            </div>
          </div>

          <div className={styles.codeBlockRed}>
            <code>wss://openclaw.yourserver.com:8080</code>
            <CopyButton text="wss://openclaw.yourserver.com:8080" className={styles.copyBtn} />
          </div>

          <div className={styles.calloutRed}>
            <Info size={18} className={styles.calloutIconRed} />
            <div className={styles.calloutText}>
              Kybera automatically converts <strong>http://</strong> to <strong>ws://</strong> and <strong>https://</strong> to <strong>wss://</strong>, so entering an HTTPS URL will work correctly.
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="quick-connect" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>Quick Connect</h2>
          <p className={styles.sectionSubtitle}>Connect OpenClaw to Kybera with a single link</p>
          <p className={styles.sectionText}>
            Kybera supports <strong>deep link connections</strong> via URL parameters. If you run an OpenClaw instance, you can generate a connection link that auto-configures Kybera when opened.
          </p>

          <div className={styles.connectionBox}>
            <div className={styles.connectionBoxTitle}>
              <Terminal size={16} />
              Connection URL Format
            </div>
            <p className={styles.connectionBoxText}>
              Append your Gateway URL and optional auth token as query parameters:
            </p>
            <div className={styles.connectionFormat}>
              <code>{APP_URL}?openclaw_url=wss://host:port&openclaw_token=your_token</code>
            </div>
          </div>

          <p className={styles.sectionText}>
            When someone opens a link with these parameters, Kybera will detect the connection details and prompt them to save the configuration. This makes it easy to share your Gateway setup or onboard new users.
          </p>

          <div className={styles.callout}>
            <Info size={18} className={styles.calloutIcon} />
            <div className={styles.calloutText}>
              <strong>For local instances:</strong> Quick connect links work best with remote/hosted gateways. A link pointing to <code style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '13px', padding: '1px 4px', background: 'rgba(0,0,0,0.3)', borderRadius: '3px' }}>ws://localhost:3100</code> will only work if the recipient also has OpenClaw running locally on that port.
            </div>
          </div>
        </motion.div>

        <div className={styles.divider} />

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="security" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>Security</h2>
          <p className={styles.sectionSubtitle}>How Kybera protects your assets</p>
          <p className={styles.sectionText}>
            Kybera is a <strong>non-custodial wallet</strong>. Your private keys are encrypted on your device and never transmitted to any server. Here's how the security model works:
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Lock size={18} /></div>
              <div className={styles.featureContent}>
                <h4>AES-256 Encryption</h4>
                <p>All wallet data and private keys are encrypted using AES-256 before being stored in your browser's IndexedDB.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Shield size={18} /></div>
              <div className={styles.featureContent}>
                <h4>PBKDF2 Key Derivation</h4>
                <p>Your password is run through PBKDF2 to derive the encryption key, providing strong resistance against brute-force attacks.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Lock size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Auto-Lock</h4>
                <p>The wallet automatically locks after a configurable period of inactivity, requiring your password to regain access.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Shield size={18} /></div>
              <div className={styles.featureContent}>
                <h4>Memory Protection</h4>
                <p>Sensitive data in memory is actively protected and cleared when no longer needed, reducing the attack surface.</p>
              </div>
            </div>
          </div>

          <div className={styles.callout}>
            <Info size={18} className={styles.calloutIcon} />
            <div className={styles.calloutText}>
              <strong>Your keys, your crypto.</strong> Kybera never has access to your unencrypted private keys outside of your browser session. There are no servers storing your wallet data. If you lose your password or seed phrase, there is no recovery mechanism.
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div id="troubleshooting" className={styles.sectionAnchor} />
          <h2 className={styles.sectionTitle}>Troubleshooting</h2>
          <p className={styles.sectionSubtitle}>Common issues and solutions</p>

          <div className={styles.troubleList}>
            <div className={styles.troubleItem}>
              <h4>OpenClaw connection fails immediately</h4>
              <p>
                Make sure your OpenClaw Gateway is running and the URL is correct. For local instances, verify the gateway is listening on the expected port (default <code>3100</code>). Check your browser's console for WebSocket errors.
              </p>
            </div>
            <div className={styles.troubleItem}>
              <h4>Connection works locally but not remotely</h4>
              <p>
                Remote connections require <code>wss://</code> (TLS). Make sure your server has SSL configured and you're using <code>wss://</code> instead of <code>ws://</code>. Also check that your firewall allows inbound connections on the Gateway port.
              </p>
            </div>
            <div className={styles.troubleItem}>
              <h4>Research times out or returns errors</h4>
              <p>
                This usually means the OpenClaw AI agent encountered an issue during research. Try again - transient failures with upstream APIs (block explorers, DexScreener) can cause occasional timeouts. If the problem persists, check your OpenClaw Gateway logs.
              </p>
            </div>
            <div className={styles.troubleItem}>
              <h4>Auth token rejected</h4>
              <p>
                Verify the token in Kybera's settings matches exactly what's configured in your OpenClaw Gateway. Tokens are case-sensitive. If you recently rotated the token on your Gateway, update it in Kybera's settings and reconnect.
              </p>
            </div>
            <div className={styles.troubleItem}>
              <h4>Wallet not showing token balances</h4>
              <p>
                Token discovery relies on RPC node data. If balances are missing, try switching to a different network and back, or check that the token contract address is valid on the chain you're viewing.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.docsCta} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className={styles.docsCtaTitle}>Ready to get started?</h3>
          <p className={styles.docsCtaText}>
            Launch the Kybera app and start managing your multi-chain portfolio with AI-powered research.
          </p>
          <div className={styles.docsCtaButtons}>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              Launch App
              <ArrowUpRight size={18} />
            </a>
            <a
              href={OPENCLAW_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              <Terminal size={18} />
              OpenClaw on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Docs
