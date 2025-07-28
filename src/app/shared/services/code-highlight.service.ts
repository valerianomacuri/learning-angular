import { Injectable } from '@angular/core';
import { codeToHtml } from 'shiki';
@Injectable({
  providedIn: 'root',
})
export class CodeHighlightService {
  private theme = 'one-dark-pro';
  async angularHtmlToHtml(code: string = ''): Promise<string> {
    const highlightedHtml = await codeToHtml(code, {
      lang: 'angular-html',
      theme: this.theme,
    });
    const cleanHtml = this.removeBackgroundHtml(highlightedHtml);
    return cleanHtml;
  }

  async angularTsToHtml(code: string = ''): Promise<string> {
    const highlightedHtml = await codeToHtml(code, {
      lang: 'angular-ts',
      theme: this.theme,
    });
    const cleanHtml = this.removeBackgroundHtml(highlightedHtml);
    return cleanHtml;
  }

  private removeBackgroundHtml(highlightedHtml: string) {
    const cleanHtml = highlightedHtml.replace(
      /background-color:[^;"]+;?/gi,
      ''
    );
    return cleanHtml;
  }
}
