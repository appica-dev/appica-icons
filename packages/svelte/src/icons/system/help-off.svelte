<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.641 5.631A9 9 0 0 0 18.36 18.369m1.68-2.318A9 9 0 0 0 7.966 3.953M12 17v.01m0-3.51a1.5 1.5 0 0 1 .394-1.1m2.106-1.9a2.6 2.6 0 0 0-3.347-3.361M3 2.999l18 18.001\"/>";
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
