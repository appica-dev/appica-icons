<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14 14 2 2m1.73 3.875A2.23 2.23 0 0 1 15.782 21H8.5a2.22 2.22 0 0 1-1.947-1.158l-4.272-6.75a2.27 2.27 0 0 1 0-2.184l4.272-6.75A2.23 2.23 0 0 1 8.498 3h7.285c.81 0 1.554.443 1.947 1.158l3.98 6.75a2.33 2.33 0 0 1 0 2.25l-3.98 6.75zM8 11.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0\"/>";
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
