<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 21v-6a2 2 0 0 1 2-2h2c.645 0 1.218.305 1.584.78M20 11l-8-8-9 9h2v7a2 2 0 0 0 2 2h4m7.42-5.39a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z\"/>";
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
