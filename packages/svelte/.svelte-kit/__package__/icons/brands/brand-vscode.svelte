<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 3v18m0-18 4 2.5v13L16 21m0-18-6.932 7.198M16 3v5l-4.795 4.141M16 21 3 7.5l2-1 11 10m-6.835-2.597L5 17.5l-2-1L7.333 12\"/>";
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
