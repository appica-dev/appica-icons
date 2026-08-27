<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3.5 20.5 2.39-2.39M20.5 20.5l-2.39-2.39M20.5 3.5l-2.39 2.39M3.5 3.5l2.39 2.39m3.985 14.342a8.51 8.51 0 0 1-6.106-6.107m16.463 0a8.51 8.51 0 0 1-6.107 6.107M3.768 9.875a8.52 8.52 0 0 1 5.82-6.026l.287-.08m4.25-.001a8.51 8.51 0 0 1 6.107 6.108M10.938 12a1.062 1.062 0 1 0 2.124 0 1.062 1.062 0 0 0-2.124 0\"/>";
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
