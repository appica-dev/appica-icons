<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 13v4m-2-2h4m5 7-3-3M6 18H5a2 2 0 0 1-2-2v-1m0-4v-1m0-4V5a2 2 0 0 1 2-2h1m4 0h1m4 0h1a2 2 0 0 1 2 2v1m-8 9a5 5 0 1 0 10 0 5 5 0 0 0-10 0\"/>";
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
