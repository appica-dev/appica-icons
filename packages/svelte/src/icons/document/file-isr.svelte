<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 3v4a1 1 0 0 0 1 1h4m-5-5H8a2 2 0 0 0-2 2v3m9-5 5 5m0 0v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7m0 0-3 3m3-3 3 3\"/>";
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
