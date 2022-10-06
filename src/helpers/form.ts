import { FieldValues } from 'react-hook-form';

export function getFormNames<T extends FieldValues = FieldValues>(defaultValues: T) {
	return Object.keys(defaultValues).reduce((prev, key) => ({ ...prev, [key]: key }), {} as Record<keyof T, keyof T>);
}
