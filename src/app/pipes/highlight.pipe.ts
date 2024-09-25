import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true 
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, searchTerm: string): string {
    if (!searchTerm) {
      return value ; // Return original value if there's no search term
    }
    // Create a RegExp object to find the matching text, ignoring case
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    // Replace matching text with a span to apply styles
    return value.replace(regex, '<span class="bg-success">$1</span>');
  }
}
