<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 3v13M3 9h18V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h1m-3-6h7m5-12v7m.5 6q2.5 1.5 2.5-1v-2s4 1.06 4 5c0 1.664-.649 3.338-2 4v-.25c0-.957-1.053-1.75-2-1.75s-2 .793-2 1.75V22c-1.351-.662-2-2-2-3.5s1.5-2.5 1.5-2.5\"/>";
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
