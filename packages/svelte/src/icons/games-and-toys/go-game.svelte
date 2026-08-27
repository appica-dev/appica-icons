<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6a2 2 0 0 0 2 2M4 6a2 2 0 0 1 2-2M4 6H3m3 2a2 2 0 0 0 2-2M6 8v8M8 6a2 2 0 0 0-2-2m2 2h13M6 4V3m4 9a2 2 0 0 0 2 2m-2-2a2 2 0 0 1 2-2m-2 2H3m9 2a2 2 0 0 0 2-2m-2 2v7m2-9a2 2 0 0 0-2-2m2 2h7m-9-2V3M4 18a2 2 0 0 0 2 2m-2-2a2 2 0 0 1 2-2m-2 2H3m3 2a2 2 0 0 0 2-2m-2 2v1m2-3a2 2 0 0 0-2-2m2 2h8m0 0a2 2 0 0 0 2 2m-2-2a2 2 0 0 1 2-2m0 4a2 2 0 0 0 2-2m-2 2v1m2-3a2 2 0 0 0-2-2m2 2h1m-3-2V3\"/>";
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
