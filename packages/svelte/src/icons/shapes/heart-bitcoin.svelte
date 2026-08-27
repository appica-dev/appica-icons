<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.991 21v-5.995m1.999 0v-1.5m0 8.995V21m-1.999-2.997h2.998m-1 0h.5m0 0a1.499 1.499 0 1 1 0 2.998h-3.497m3.497-2.998a1.5 1.5 0 0 0 0-2.998h-3.497m-2.998 3.997-1 1L4.5 12.578a4.997 4.997 0 1 1 7.495-6.562 4.996 4.996 0 0 1 8.778 4.441\"/>";
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
