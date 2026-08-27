<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 18H9m0 0a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m0 12v3h3.5M9 6h6M9 6V3h6v3m0 0a3 3 0 0 1 3 3v2m1 7v.01m2.121 2.111a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879\"/>";
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
