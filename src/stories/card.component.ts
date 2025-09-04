import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-blue-100 rounded-lg shadow-md p-6 max-w-sm border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ content }}</p>
      <button
        *ngIf="showButton"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors"
      >
        {{ buttonText }}
      </button>
    </div>
  `,
})
export class CardComponent {
  @Input() title = 'Card Title';
  @Input() content =
    'This is the card content. It can contain any text or description.';
  @Input() showButton = true;
  @Input() buttonText = 'Learn More';
}
