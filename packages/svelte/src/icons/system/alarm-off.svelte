<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.268 7.262a7.854 7.854 0 0 0-.614 11.672 7.9 7.9 0 0 0 5.986 2.307 7.93 7.93 0 0 0 5.73-2.881m1.523-2.976a7.85 7.85 0 0 0-2.045-7.572 7.93 7.93 0 0 0-7.592-2.06m1.994 6.499v1.125h1.129M4.641 4.673 3.5 5.5m14.395-2.25L21 5.5M3 2.75l18 18\"/>";
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
