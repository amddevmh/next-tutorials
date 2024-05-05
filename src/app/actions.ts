'use server'
 
import { revalidatePath } from 'next/cache'
import { counterService } from '../../counter-service'
 
export async function incrementCounterAction() {
  try {
    await counterService.incrementCounter()
  } catch (error) {
    console.error('counterService.incrementCounter Failed', error)
  }
  revalidatePath('/counter')
}