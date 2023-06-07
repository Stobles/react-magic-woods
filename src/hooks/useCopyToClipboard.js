import { useCallback, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function useCopyToClipboard(resetInterval = null) {
  const [isCopied, setCopied] = useState(false);
  const handleCopy = useCallback((text) => {
    if (typeof text === 'string' || typeof text === 'number') {
      navigator.clipboard.writeText(text.toString());
      setCopied(true);
      toast.success('Текст успешно скопирован');
    } else {
      setCopied(false);
      toast.error('Не удалось скопировать текст');
    }
  }, []);
  useEffect(() => {
    let timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);
  return [isCopied, handleCopy];
}
