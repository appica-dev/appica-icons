<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6h16M6 12h10m-7 6h3m7 .01V18l2.121 2.121m0 0a3.005 3.005 0 0 0-.454-4.616 3 3 0 0 0-3.334 0 3 3 0 0 0-.454 4.616Q17.506 20.749 19 22q1.577-1.335 2.121-1.879\"/>";
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
