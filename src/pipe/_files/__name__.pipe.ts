import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: '<%= name %>'
})
export class <%= utils.classify(name) %>Pipe implements PipeTransform {
	transform(value: any): string {
		return value;
	}
}