<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8 7.535 2.363-3.944a1.92 1.92 0 0 1 1.636-.923 1.91 1.91 0 0 1 1.637.922L16 7.5m-11 5-2.743 4.626a1.914 1.914 0 0 0 1.636 2.87L8.499 20M19 12.5l2.742 4.626a1.914 1.914 0 0 1-1.636 2.87L15.5 20M12 18v4m7.66-13-3.464 2M4.5 8.85l3.464 2\"/>";
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
