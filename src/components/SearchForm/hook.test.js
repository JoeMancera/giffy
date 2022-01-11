import { renderHook , act} from '@testing-library/react-hooks';
import useForm from './useForm';

test('should change keyword - hook test', () => {
  const {result} = renderHook(() => useForm());

  // El act simula la ejecución y cambio del estado como si fuera en navegador
  act(() => {
    result.current.updateKeyword('test2');
  })

  expect(result.current.keyword).toBe('test2')
})

test('should use initial value', () => {
  const {result} = renderHook(() => useForm({ initialKeyword: 'Ironman'}));
  
  expect(result.current.keyword).toBe('Ironman')

})

test('should update correctly times when used twice', () => {
  const {result} = renderHook(() => useForm({ initialKeyword: '404'}));

  act(() => {
    result.current.updateKeyword('2');
    result.current.updateKeyword('20');
  })

  expect(result.current.keyword).toBe('20')
  expect(result.current.times).toBe(2)

  
})
