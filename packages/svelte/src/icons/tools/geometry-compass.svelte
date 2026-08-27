<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6.688 21.5 4.25-12.667m2.124 0 1.573 4.686m1.008 3.005 1.67 4.976M12 4.611c.564 0 1.104.223 1.503.618a2.104 2.104 0 0 1 0 2.986 2.13 2.13 0 0 1-3.006 0 2.104 2.104 0 0 1 0-2.986A2.13 2.13 0 0 1 12 4.611m0 0V2.5M3.5 12c1.621 3.12 4.875 5.278 8.5 5.278 3.623 0 6.878-2.162 8.5-5.278\"/>";
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
