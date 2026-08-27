<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.43 4.5h3.654a1.07 1.07 0 0 1 .993.674l1.222 3.06a3.21 3.21 0 0 0 2.36 1.96l5.043.993a2.23 2.23 0 0 1 1.798 2.19v.766a1.07 1.07 0 0 1-1.07 1.071H4.576a1.07 1.07 0 0 1-1.07-1.178l.856-8.572A1.07 1.07 0 0 1 5.43 4.5m.101 12.857c0 .569.226 1.114.627 1.515a2.136 2.136 0 0 0 3.65-1.515 2.136 2.136 0 1 0-4.277 0m8.554 0a2.136 2.136 0 1 0 4.277 0c0-.568-.226-1.113-.627-1.515a2.136 2.136 0 0 0-3.65 1.515\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
