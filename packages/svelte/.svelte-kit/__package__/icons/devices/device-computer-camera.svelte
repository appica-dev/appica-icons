<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8 16-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16M5 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0m4 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
