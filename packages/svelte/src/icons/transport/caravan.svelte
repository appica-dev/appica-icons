<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 18a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H5a2 2 0 0 1-2-2v-3.5A5.5 5.5 0 0 1 8.5 7H18a2 2 0 0 1 2 2v7m-9 2h7a2 2 0 0 0 2-2m0 0h2M8 7l7-3 1 3m-3 4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z\"/>";
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
