import Image from 'next/image';
import styles from './index.module.css';

const IndexPage = () => {
  return (
    <div id="my-page" className={styles.container}>
      <div className={styles.translucentBox}>
        <h1>Welcome to HeliumDenver!</h1>
        <p><br></br>
          Here is a beginner-friendly guide for creating a Solana wallet and requesting/sending USDC:
        </p>
        <ol>
          <li><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwic8Ye-6ob-AhXwLkQIHVBfDTEQFnoECBAQAQ&url=https%3A%2F%2Fphantom.app%2F&usg=AOvVaw0yvc_DOKA3TvjvETRabyoW" 
          target="_blank">Install Phantom</a></li>
          <li><a href="https://help.phantom.app/hc/en-us/articles/8071074929043-How-to-create-a-new-wallet" target="_blank">Create a wallet</a></li>
          <li><a href="https://help.phantom.app/hc/en-us/articles/4406393831187-How-to-deposit-ETH-MATIC-and-SOL-in-my-Phantom-wallet-" target="_blank">Fund your wallet</a></li>
          <li><a href="https://github.com/ilovespectra/helium-solana-support/blob/main/walkthroughs/request-usdc.md" target="_blank">Request USDC</a></li>
          <li><a href="https://github.com/ilovespectra/helium-solana-support/blob/main/walkthroughs/send-usdc.md" target="_blank">Send USDC</a></li>
        </ol>
        <p>
          Remember to always keep your seed phrase secure and never share it with anyone!
        </p>
        <div className={styles.logoContainer}>
          <Image src="/helium.png" alt="Helium logo" width={90} height={90} />
          <Image src="/phantom.png" alt="Phantom logo" width={90} height={90} />
          <Image src="/solana.png" alt="Solana logo" width={90} height={90} />
          <Image src="/usdc.svg" alt="USDC logo" width={90} height={90} />
        </div>


        <p>
          To learn more about Solana and USDC, check out these resources:
          <ul>
            <div className={styles.graphics}>
              <li><a href="https://solana.com/">Solana official website</a></li>
              <li><a href="https://www.circle.com/en/usdc">USDC official website</a></li>
            </div>
          </ul>
        </p>
        <div className={styles.animation}>
          <svg width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="#1abc9c" strokeWidth="4" fill="none" />
            <circle cx="50" cy="50" r="20" stroke="#3498db" strokeWidth="4" fill="none">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
