<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15H12m-.422-12a17 17 0 0 0 0 18M12.5 3c1.719 2.755 2.5 5.876 2.5 9m3 9v-7m0 0 3 3m-3-3-3 3\"/>";
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
