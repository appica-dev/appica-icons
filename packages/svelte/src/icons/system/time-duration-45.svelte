<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M7 9v2a1 1 0 0 0 1 1h1m1-3v6M7.5 4.2v.01M4.2 7.5v.01M3 12a9 9 0 1 0 9-9\"/>";
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
