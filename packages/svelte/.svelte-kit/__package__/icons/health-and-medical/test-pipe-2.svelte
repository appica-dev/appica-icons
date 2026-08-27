<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.375 2v16.667c0 .884-.356 1.732-.989 2.357A3.4 3.4 0 0 1 12 22a3.4 3.4 0 0 1-2.386-.976 3.31 3.31 0 0 1-.989-2.357V2m0 10h6.75M7.5 2h9\"/>";
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
