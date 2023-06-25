'use client'

import ClipboardConfirmation from './clipboard-confirmation';
import s from './contact.module.scss';
import { useState } from 'react';

interface Social {
  platform: string;
  url: string;
  icon: string;
}

export default function Contact({social, contact}: {social: Social[], contact: any}) {
  const [copied, setCopied] = useState(false);
  const [confirmPosition, setConfirmPosition] = useState({top: '0px', left: '0px'});

  const onClick = (e: any) => {
    const mq = window.matchMedia('(max-width: 400px)')
    e.preventDefault()
    const email = e.target.href.replace('mailto:', '')
    copyToClipboard(email);
    setCopied(true);

    setConfirmPosition({ 
      top: e.clientY + 'px', 
      left: mq.matches ? '20px' : e.clientX + 'px'
    }) 

    setTimeout(() => {
      setCopied(false);
    }, 1000)
  }

  const copyToClipboard = (str: string) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selectedText = document.getSelection()
    if (!selectedText) return;

    const text =
      selectedText.rangeCount > 0
        ? selectedText.getRangeAt(0)
        : false
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    if (text) {
      selectedText.removeAllRanges()
      selectedText.addRange(text)
    }
  }

  return(
    <div id="contact" className={s.contact}>
      <div className="o-container">
        <h2 className="heading">
          <div className="outline">{contact.title}</div>
          <div className="solid">{contact.title}</div>
        </h2>

        <div onClick={onClick} className={s.copy} data-location="footer" dangerouslySetInnerHTML={{ __html: contact.copy }}></div>

        {copied && <ClipboardConfirmation position={confirmPosition} />}
      
        <div className={s.social}>
          {social.map((item: Social ) => (
            <a className={s.icon} href={item.url} key={item.platform}>
              <img src={item.icon} alt={item.platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}