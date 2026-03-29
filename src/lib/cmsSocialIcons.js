import { Github, Linkedin, MessageSquare, Globe } from 'lucide-react';

export function getSocialIconForCmsLink(social) {
  const label = (social?.label ?? '').toLowerCase();
  const href = (social?.href ?? '').toLowerCase();

  if (href.includes('github') || label.includes('github')) return Github;
  if (href.includes('linkedin') || label.includes('linkedin')) return Linkedin;
  if (href.includes('discord') || label.includes('discord')) return MessageSquare;

  return Globe;
}
