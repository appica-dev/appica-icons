<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18.69 12.198-5.054-8.292a1.9 1.9 0 0 0-.698-.664 1.94 1.94 0 0 0-1.879 0 1.9 1.9 0 0 0-.697.664L2.257 17.21a1.86 1.86 0 0 0-.006 1.872c.166.285.404.523.692.69s.615.256.95.26H12m4-.98h6m-3-2.948V22\"/>";
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
