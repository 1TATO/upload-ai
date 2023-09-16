import { FileVideo, Github, Upload, Wand2 } from 'lucide-react';
import { Button } from './components/ui/button';
import { Label } from './components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import { Separator } from './components/ui/separator';
import { Slider } from './components/ui/slider';
import { Textarea } from './components/ui/textarea';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-2 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">made by TATO</span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant={'outline'}>
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 px-6 py-2 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Include the AI prompt..."
            />

            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Generated AI result..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            You can use{' '}
            <code className="text-violet-400">{'{transcription}'}</code>{' '}
            variable in your prompt to add you selected transcription content.
          </p>
        </div>

        <aside className="w-80 space-y-4">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/20"
            >
              <FileVideo className="w-4 h-4" />
              Select video
            </label>

            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Transcription prompt</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Give key words mentioned during the video separated with commas (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Load video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="title">Youtube title</SelectItem>
                  <SelectItem value="description">
                    Youtube description
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>

              <span className="block text-sm text-muted-foreground italic">
                You will be able to customise this option soon
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperature</Label>

              <Slider min={0} max={1} step={0.1} />

              <span className="block text-sm text-muted-foreground italic leading-relaxed">
                Higher values tend to make more creative results, but with
                possible errors
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Execute <Wand2 className="h-4 w-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
