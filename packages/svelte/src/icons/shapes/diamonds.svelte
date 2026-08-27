<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10.831 20.413-5.375-6.91c-.608-.783-.608-2.223 0-3l5.375-6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608.783.608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1-2.338 0\"/>";
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
