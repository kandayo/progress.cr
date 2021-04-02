crystal_doc_search_index_callback({"repository_name":"Progress","body":"# Progress\n\n[![Built with Crystal 0.36.1](https://img.shields.io/badge/Crystal-0.36.1-%23333333)](https://crystal-lang.org/)\n[![GitHub release](https://img.shields.io/github/release/kandayo/progress.cr.svg?label=Release)](https://github.com/kandayo/progress.cr/releases)\n[![Specs](https://github.com/kandayo/progress.cr/workflows/Specs/badge.svg)](https://github.com/kandayo/progress.cr/actions)\n\nSimple and customizable progress bar for Crystal.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     progress:\n       github: kandayo/progress\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"progress\"\n\n# This is the default configuration; all arguments are optional.\nprogress = Progress.new(\n  width: 100,\n  total: 100,\n  step: 0,\n  left_border_char: \"[\",\n  filled_char: \"=\",\n  empty_char: \" \",\n  right_border_char: \"]\",\n  label: \"Neutron Star.pdf\",\n  template: \"{label} {bar} {step} {percent} [{elapsed}]\",\n  percent_mask: \"%4.f%%\",\n  total_mask: \"%5.1f\",\n  step_mask: \"%5.1f\",\n  humanize_bytes: true,\n  stream: STDOUT\n )\n\n# Optional: print an empty progress bar.\nprogress.init\n\nuntil progress.done?\n  # Ticks the progress bar by 1 unit.\n  progress.tick(1)\n  sleep 0.1\nend\n\n# Or you might set the step direcly.\nprogress.set(100)\nprogress.done? # => true\n\n# Resets the progress bar state.\nprogress.reset\n```\n\n### Template options\n\n - `{label}`\n - `{bar}` — The progress bar.\n - `{total}`\n - `{step}` — Current step.\n - `{percent}` — Formatted percent (e.g. 100%)\n - `{elapsed}` — Elapsed time (e.g. 00:05)\n\nBy default, progress.cr tries to both humanize and format `total` and `step`.\nFor instance, `10_485_760` would printed as `10.0 MiB`. You might want to\ncustomize `total_mask` and `step_mask`.\n\nTo opt-out this behaviour, set `humanize_bytes` to false.\n\n## Examples\n\n```\n# {label} {step} {percent} [{elapsed}]\nNeutron Star.pdf [====================================]   8.1 MiB  100%  [00:10]\n\n# {bar} {percent}\n[##############################] 100%\n\n# {bar} {label}\n[##############################] Neutron Star.pdf\n\n# Unicode block characters\n[██████████████████████] ⌛ Processing...\n```\n\n## Future\n\nIt definitely needs to be more customizable and flexible.\n\nFor now it works for my use case, and I hope it works for you as well.\n\n## Contributing\n\n1. Fork it (<https://github.com/kandayo/progress/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [kandayo](https://github.com/kandayo) - creator and maintainer\n","program":{"html_id":"Progress/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"Progress","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"Progress/Progress","path":"Progress.html","kind":"class","full_name":"Progress","name":"Progress","abstract":false,"superclass":{"html_id":"Progress/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"Progress/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"Progress/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/progress.cr","line_number":3,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L3"},{"filename":"src/progress/version.cr","line_number":1,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress/version.cr#L1"}],"repository_name":"Progress","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[{"id":"CARRIAGE_RETURN","name":"CARRIAGE_RETURN","value":"'\\r'","doc":null,"summary":null},{"id":"DEFAULT_TEMPLATE","name":"DEFAULT_TEMPLATE","value":"\"{label} {bar} {step} {percent} [{elapsed}]\"","doc":null,"summary":null},{"id":"EMPTY_CHAR","name":"EMPTY_CHAR","value":"\" \"","doc":null,"summary":null},{"id":"FILLED_CHAR","name":"FILLED_CHAR","value":"\"=\"","doc":null,"summary":null},{"id":"GiB","name":"GiB","value":"1024 * MiB","doc":null,"summary":null},{"id":"KiB","name":"KiB","value":"1024","doc":null,"summary":null},{"id":"LEFT_BORDER_CHAR","name":"LEFT_BORDER_CHAR","value":"\"[\"","doc":null,"summary":null},{"id":"MiB","name":"MiB","value":"1024 * KiB","doc":null,"summary":null},{"id":"NEW_LINE","name":"NEW_LINE","value":"'\\n'","doc":null,"summary":null},{"id":"PERCENT_MASK","name":"PERCENT_MASK","value":"\"%4.f%%\"","doc":null,"summary":null},{"id":"RIGHT_BORDER_CHAR","name":"RIGHT_BORDER_CHAR","value":"\"]\"","doc":null,"summary":null},{"id":"STEP_MASK","name":"STEP_MASK","value":"\"%5.1f\"","doc":null,"summary":null},{"id":"TEMPLATE_REGEX","name":"TEMPLATE_REGEX","value":"/{label}|{bar}|{total}|{step}|{percent}|{elapsed}/","doc":null,"summary":null},{"id":"TOTAL_MASK","name":"TOTAL_MASK","value":"\"%5.1f\"","doc":null,"summary":null},{"id":"VERSION","name":"VERSION","value":"\"0.1.1\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new(width:Num=100_u64,total:Num=100_u64,step:Num=0_u64,left_border_char:String=LEFT_BORDER_CHAR,filled_char:String=FILLED_CHAR,empty_char:String=EMPTY_CHAR,right_border_char:String=RIGHT_BORDER_CHAR,label:String=&quot;&quot;,template:String=DEFAULT_TEMPLATE,total_mask:String=TOTAL_MASK,step_mask:String=STEP_MASK,percent_mask:String=PERCENT_MASK,humanize_bytes:Bool=true,stream:IO::FileDescriptor=STDOUT)-class-method","html_id":"new(width:Num=100_u64,total:Num=100_u64,step:Num=0_u64,left_border_char:String=LEFT_BORDER_CHAR,filled_char:String=FILLED_CHAR,empty_char:String=EMPTY_CHAR,right_border_char:String=RIGHT_BORDER_CHAR,label:String=&quot;&quot;,template:String=DEFAULT_TEMPLATE,total_mask:String=TOTAL_MASK,step_mask:String=STEP_MASK,percent_mask:String=PERCENT_MASK,humanize_bytes:Bool=true,stream:IO::FileDescriptor=STDOUT)-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[{"name":"width","doc":null,"default_value":"100_u64","external_name":"width","restriction":"Num"},{"name":"total","doc":null,"default_value":"100_u64","external_name":"total","restriction":"Num"},{"name":"step","doc":null,"default_value":"0_u64","external_name":"step","restriction":"Num"},{"name":"left_border_char","doc":null,"default_value":"LEFT_BORDER_CHAR","external_name":"left_border_char","restriction":"String"},{"name":"filled_char","doc":null,"default_value":"FILLED_CHAR","external_name":"filled_char","restriction":"String"},{"name":"empty_char","doc":null,"default_value":"EMPTY_CHAR","external_name":"empty_char","restriction":"String"},{"name":"right_border_char","doc":null,"default_value":"RIGHT_BORDER_CHAR","external_name":"right_border_char","restriction":"String"},{"name":"label","doc":null,"default_value":"\"\"","external_name":"label","restriction":"String"},{"name":"template","doc":null,"default_value":"DEFAULT_TEMPLATE","external_name":"template","restriction":"String"},{"name":"total_mask","doc":null,"default_value":"TOTAL_MASK","external_name":"total_mask","restriction":"String"},{"name":"step_mask","doc":null,"default_value":"STEP_MASK","external_name":"step_mask","restriction":"String"},{"name":"percent_mask","doc":null,"default_value":"PERCENT_MASK","external_name":"percent_mask","restriction":"String"},{"name":"humanize_bytes","doc":null,"default_value":"true","external_name":"humanize_bytes","restriction":"Bool"},{"name":"stream","doc":null,"default_value":"STDOUT","external_name":"stream","restriction":"IO::FileDescriptor"}],"args_string":"(width : Num = <span class=\"n\">100_u64</span>, total : Num = <span class=\"n\">100_u64</span>, step : Num = <span class=\"n\">0_u64</span>, left_border_char : String = <span class=\"t\">LEFT_BORDER_CHAR</span>, filled_char : String = <span class=\"t\">FILLED_CHAR</span>, empty_char : String = <span class=\"t\">EMPTY_CHAR</span>, right_border_char : String = <span class=\"t\">RIGHT_BORDER_CHAR</span>, label : String = <span class=\"s\">&quot;&quot;</span>, template : String = <span class=\"t\">DEFAULT_TEMPLATE</span>, total_mask : String = <span class=\"t\">TOTAL_MASK</span>, step_mask : String = <span class=\"t\">STEP_MASK</span>, percent_mask : String = <span class=\"t\">PERCENT_MASK</span>, humanize_bytes : Bool = <span class=\"n\">true</span>, stream : IO::FileDescriptor = <span class=\"t\">STDOUT</span>)","args_html":"(width : <a href=\"Progress/Num.html\">Num</a> = <span class=\"n\">100_u64</span>, total : <a href=\"Progress/Num.html\">Num</a> = <span class=\"n\">100_u64</span>, step : <a href=\"Progress/Num.html\">Num</a> = <span class=\"n\">0_u64</span>, left_border_char : String = <span class=\"t\">LEFT_BORDER_CHAR</span>, filled_char : String = <span class=\"t\">FILLED_CHAR</span>, empty_char : String = <span class=\"t\">EMPTY_CHAR</span>, right_border_char : String = <span class=\"t\">RIGHT_BORDER_CHAR</span>, label : String = <span class=\"s\">&quot;&quot;</span>, template : String = <span class=\"t\">DEFAULT_TEMPLATE</span>, total_mask : String = <span class=\"t\">TOTAL_MASK</span>, step_mask : String = <span class=\"t\">STEP_MASK</span>, percent_mask : String = <span class=\"t\">PERCENT_MASK</span>, humanize_bytes : Bool = <span class=\"n\">true</span>, stream : IO::FileDescriptor = <span class=\"t\">STDOUT</span>)","location":{"filename":"src/progress.cr","line_number":23,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L23"},"def":{"name":"new","args":[{"name":"width","doc":null,"default_value":"100_u64","external_name":"width","restriction":"Num"},{"name":"total","doc":null,"default_value":"100_u64","external_name":"total","restriction":"Num"},{"name":"step","doc":null,"default_value":"0_u64","external_name":"step","restriction":"Num"},{"name":"left_border_char","doc":null,"default_value":"LEFT_BORDER_CHAR","external_name":"left_border_char","restriction":"String"},{"name":"filled_char","doc":null,"default_value":"FILLED_CHAR","external_name":"filled_char","restriction":"String"},{"name":"empty_char","doc":null,"default_value":"EMPTY_CHAR","external_name":"empty_char","restriction":"String"},{"name":"right_border_char","doc":null,"default_value":"RIGHT_BORDER_CHAR","external_name":"right_border_char","restriction":"String"},{"name":"label","doc":null,"default_value":"\"\"","external_name":"label","restriction":"String"},{"name":"template","doc":null,"default_value":"DEFAULT_TEMPLATE","external_name":"template","restriction":"String"},{"name":"total_mask","doc":null,"default_value":"TOTAL_MASK","external_name":"total_mask","restriction":"String"},{"name":"step_mask","doc":null,"default_value":"STEP_MASK","external_name":"step_mask","restriction":"String"},{"name":"percent_mask","doc":null,"default_value":"PERCENT_MASK","external_name":"percent_mask","restriction":"String"},{"name":"humanize_bytes","doc":null,"default_value":"true","external_name":"humanize_bytes","restriction":"Bool"},{"name":"stream","doc":null,"default_value":"STDOUT","external_name":"stream","restriction":"IO::FileDescriptor"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(width, total, step, left_border_char, filled_char, empty_char, right_border_char, label, template, total_mask, step_mask, percent_mask, humanize_bytes, stream)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"done?:Bool-instance-method","html_id":"done?:Bool-instance-method","name":"done?","doc":"Returns true if the progress bar is done, else false.","summary":"<p>Returns true if the progress bar is done, else false.</p>","abstract":false,"args":[],"args_string":" : Bool","args_html":" : Bool","location":{"filename":"src/progress.cr","line_number":109,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L109"},"def":{"name":"done?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"@total == @step"}},{"id":"elapsed_time:String-instance-method","html_id":"elapsed_time:String-instance-method","name":"elapsed_time","doc":"Returns the elapsed time since the progress bar was last initialized.\n\n```\nprogress = Progress.new\nsleep 5\nprogress.elapsed_time # => 00:05\n```","summary":"<p>Returns the elapsed time since the progress bar was last initialized.</p>","abstract":false,"args":[],"args_string":" : String","args_html":" : String","location":{"filename":"src/progress.cr","line_number":89,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L89"},"def":{"name":"elapsed_time","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"time = Time.monotonic - @start_at\nif time.hours.abs > 0\n  return time.to_s\nend\nString.build do |str|\n  if time.minutes < 10\n    str << '0'\n  end\n  str << time.minutes.abs\n  str << ':'\n  if time.seconds < 10\n    str << '0'\n  end\n  str << time.seconds.abs\nend\n"}},{"id":"init:Nil-instance-method","html_id":"init:Nil-instance-method","name":"init","doc":"Initializes the timer and render the progress bar.","summary":"<p>Initializes the timer and render the progress bar.</p>","abstract":false,"args":[],"args_string":" : Nil","args_html":" : Nil","location":{"filename":"src/progress.cr","line_number":43,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L43"},"def":{"name":"init","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"@start_at = Time.monotonic\nrender\n"}},{"id":"set(step:Num):Nil-instance-method","html_id":"set(step:Num):Nil-instance-method","name":"set","doc":"Sets the progress bar *step* directly. If the value overflows the progress\nbar capacity, the remaining will be ignored.\n\n```\nprogress = Progress.new(total: 10)\nprogress.set(10)\nprogress.done? # => true\n```","summary":"<p>Sets the progress bar <em>step</em> directly.</p>","abstract":false,"args":[{"name":"step","doc":null,"default_value":"","external_name":"step","restriction":"Num"}],"args_string":"(step : Num) : Nil","args_html":"(step : <a href=\"Progress/Num.html\">Num</a>) : Nil","location":{"filename":"src/progress.cr","line_number":69,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L69"},"def":{"name":"set","args":[{"name":"step","doc":null,"default_value":"","external_name":"step","restriction":"Num"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"new_step = if step > @total\n  @total\nelse\n  if step < 0\n    0_u64\n  else\n    step\n  end\nend\n@step = new_step\nrender\n"}},{"id":"started?:Bool-instance-method","html_id":"started?:Bool-instance-method","name":"started?","doc":"Returns true if the progress bar is running, else false. This method has\nno effect right now, as it always return true.","summary":"<p>Returns true if the progress bar is running, else false.</p>","abstract":false,"args":[],"args_string":" : Bool","args_html":" : Bool","location":{"filename":"src/progress.cr","line_number":104,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L104"},"def":{"name":"started?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"@step > 0"}},{"id":"tick(step:Num):Nil-instance-method","html_id":"tick(step:Num):Nil-instance-method","name":"tick","doc":"Ticks the progress bar by *step*. The step can be either positive or\nnegative.\n\n```\nprogress = Progress.new(total: 10)\nprogress.tick(10)\nprogress.done? # => true\n```","summary":"<p>Ticks the progress bar by <em>step</em>.</p>","abstract":false,"args":[{"name":"step","doc":null,"default_value":"","external_name":"step","restriction":"Num"}],"args_string":"(step : Num) : Nil","args_html":"(step : <a href=\"Progress/Num.html\">Num</a>) : Nil","location":{"filename":"src/progress.cr","line_number":56,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L56"},"def":{"name":"tick","args":[{"name":"step","doc":null,"default_value":"","external_name":"step","restriction":"Num"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"new_step = @step + step\nset(new_step)\n"}}],"macros":[],"types":[{"html_id":"Progress/Progress/Num","path":"Progress/Num.html","kind":"alias","full_name":"Progress::Num","name":"Num","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/progress.cr","line_number":21,"url":"https://github.com/kandayo/progress.cr/blob/297b424a21dfbc9995a28951ba4fdb870d0581e9/src/progress.cr#L21"}],"repository_name":"Progress","program":false,"enum":false,"alias":true,"aliased":"(Float32 | Float64 | Int32 | Int64 | UInt32 | UInt64)","aliased_html":"Float32 | Float64 | Int32 | Int64 | UInt32 | UInt64","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"Progress/Progress","kind":"class","full_name":"Progress","name":"Progress"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}]}})