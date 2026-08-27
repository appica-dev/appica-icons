<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 13v4m0 0h10M7 17v4m10-4v-4l-5-5m5 9v4M14.8 5.2 3 17m16.072 4H4.928A1.93 1.93 0 0 1 3 19.072v-6.857c0-.512.203-1 .566-1.365l7.07-7.063a1.927 1.927 0 0 1 2.727 0l7.071 7.063c.363.362.566.853.566 1.365v6.857A1.93 1.93 0 0 1 19.072 21\"/>";
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
