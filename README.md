# Progress

Simple and customizable progress bar for Crystal.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     progress:
       github: kandayo/progress
   ```

2. Run `shards install`

## Usage

```crystal
require "progress"

# This is the default configuration; all arguments are optional.
progress =
   Progress.new(
     width: 100,
     total: 100,
     step: 0,
     left_border_char: "[",
     filled_char: "=",
     empty_char: " ",
     right_border_char: "]",
     label: "Neutron Star.pdf",
     template: "{label} {bar} {step} {percent} [{elapsed}]",
     total_mask: "%5.1f MiB",
     step_mask: "%5.1f MiB",
     percent_mask: "%4.f%%"
   )

# Optional: print an empty progress bar.
progress.init

until progress.done?
  # Ticks the progress bar by 1 unit.
  progress.tick(1)
  sleep 0.1
end

# Or you might set the step direcly.
progress.set(100)
progress.done? # => true

# Resets the progress bar state.
progress.reset
```

### Template options

 - `{label}`
 - `{bar}` — The progress bar.
 - `{total}`
 - `{step}` — Current step.
 - `{percent}` — Formatted percent (e.g. 100%)
 - `{elapsed}` — Elapsed time (e.g. 00:05)

## Examples

```
# {label} {step} {percent} [{elapsed}]
Neutron Star.pdf [====================================]   8.1 MiB  100%  [00:10]

# {bar} {percent}
[##############################] 100%

# {bar} {label}
[##############################] Neutron Star.pdf

# Unicode block characters
[██████████████████████] ⌛ Processing...
```

## Future

It definitely needs to be more customizable and flexible.

For now it works for my use case, and I hope it works for you as well.

## Contributing

1. Fork it (<https://github.com/kandayo/progress/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [kandayo](https://github.com/kandayo) - creator and maintainer